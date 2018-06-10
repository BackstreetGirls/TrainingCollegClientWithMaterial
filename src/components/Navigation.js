/**
 * Created by hyx on 2018/4/27.
 */
import React from 'react';
import {connect} from 'dva';
import {Link} from 'dva/router';
import {message} from 'antd';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import './css/Navigation.css';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import SearchField from '../components/SearchField';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import {mainListItems, otherListItems} from '../components/PersonList';


const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class NavigationPage extends React.Component {

  state = {
    open_drawer: false,
    open_loginForm: false,
    open_registerForm: false,
    logout_confirm: false,
  };

  openLoginForm = () => {
    this.setState({open_loginForm: true});
  };

  closeLoginForm = () => {
    this.setState({open_loginForm: false});
  };

  openRegisterForm = () => {
    this.setState({open_registerForm: true});
  };

  closeRegisterForm = () => {
    this.setState({open_registerForm: false});
  };

  openLogoutConfirm = () => {
    if (this.props.trainee.hasLoggedIn) {
      this.setState({logout_confirm: true});
    }
    else {
      message.warning("Already logged out!");
      window.location.reload(true);
    }
  };

  closeLogoutConfirm = () => {
    this.setState({logout_confirm: false});
  };

  toggleDrawer = (open) => () => {
    this.setState({
      open_drawer: open,
    });
  };


  // 提交登录方法
  handleLogin = (e) => {
    e.preventDefault();
    let email = document.getElementById("email_login").value;
    let password = document.getElementById("password_login").value;

    if (email === "") {
      message.warning("Please type in your email!");
    }

    if (password === "") {
      message.warning("Please type in your password!");
    }

    const param = {
      email: email,
      password: password,
    };

    // 判断输入格式是否为email
    const regex = /^(?:\w+\.?)*\w+@(?:\w+\.)*\w+$/;
    if (regex.test(param.email)) {
      this.props.dispatch({
        type: 'trainee/login',
        payload: {
          ...param,
        },
      }).then(value => {
        if (value) {
          this.closeLoginForm()
          // this.props.history.push("/Trainee/ChooseCourseWithClass");
        }
      }).then(
        message.success("Login successfully!")
      ).then(
        // 1s后刷新本页面
        this.timer = setInterval(() => {
          window.location.reload(true);
        }, 1000)
      );
    }
    else {
      message.warning("invalid email!");
    }
  };

  // 提交注册方法
  handleRegister = (e) => {
    e.preventDefault();
    let email = document.getElementById("email_register").value;
    let password = document.getElementById("password_register").value;
    let name = document.getElementById("name").value;
    let verification_code = document.getElementById("verification_code").value;

    if (email === "") {
      message.warning("Please type in your email!");
    }
    if (password === "") {
      message.warning("Please type in your password!");
    }
    if (name === "") {
      message.warning("Please type in your name!");
    }
    if (verification_code === "") {
      message.warning("Please type in your verification code!");
    }

    const param = {
      email: email,
      password: password,
      name: name,
      verificationCode: verification_code
    };

    if (param.email.toString().length > 40) {
      message.warning("Email address cannot be longer than 40 characters!");
    }
    else if (param.password.toString().length > 40) {
      message.warning("Password cannot be longer than 40 characters!");
    }
    else {
      this.props.dispatch({
        type: 'trainee/register',
        payload: {
          ...param,
        },
      });
    }
  };

  // 退出登录方法
  handleLogout = () => {
    this.props.dispatch({
      type: 'trainee/logout',
      payload: {},
    }).then(
      this.closeLogoutConfirm()
    ).then(
      message.success("Logout successfully")
    ).then(
      // 1s后刷新本页面
      this.timer = setInterval(() => {
        window.location.reload(true);
      }, 1000)
    );
  };

  render() {

    const {classes} = this.props;
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const sideList = (
      <div className={classes.list}>
        <List>{mainListItems}</List>
        <Divider/>
        <List>{otherListItems}</List>
      </div>
    );

    return (
      <div>
        <AppBar position="static" color="inherit">
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              TrainingCollege
            </Typography>
            <SearchField/>
            <Link to="/homepage" style={{color: 'inherit'}}>
              <Button color="inherit">Home</Button>
            </Link>
            <Link to="/allcourses" style={{color: 'inherit'}}>
              <Button color="inherit">Category</Button>
            </Link>
            {
              this.props.trainee.hasLoggedIn === "true"
                ?
                <div>
                  <Button color="inherit" onClick={this.toggleDrawer(true)}>Personal</Button>
                  <Button color="inherit" onClick={this.openLogoutConfirm}>Logout</Button>
                </div>
                :
                <div>
                  <Button color="inherit" onClick={this.openLoginForm}>Login</Button>
                  <Button color="inherit" onClick={this.openRegisterForm}>Register</Button>
                </div>
            }
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
          anchor="right"
          open={this.state.open_drawer}
          onOpen={this.toggleDrawer(true)}
          onClose={this.toggleDrawer(false)}
          disableBackdropTransition={!iOS}
          disableDiscovery={iOS}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>

        <Dialog
          open={this.state.open_loginForm}
          onClose={this.closeLoginForm}
          aria-labelledby="form-dialog-title"
          style={{textAlign: 'center'}}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle id="form-dialog-title">
            Login
          </DialogTitle>
          <DialogContent>
            <LoginForm/>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.closeLoginForm} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleLogin} color="primary">
              Login
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={this.state.open_registerForm}
          onClose={this.closeRegisterForm}
          aria-labelledby="form-dialog-title"
          style={{textAlign: 'center'}}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle id="form-dialog-title">
            Register
          </DialogTitle>
          <DialogContent>
            <RegisterForm/>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.closeRegisterForm} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleRegister} color="primary">
              Register
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={this.state.logout_confirm}
          onClose={this.closeLogoutConfirm}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Are you sure to logout?"}</DialogTitle>
          <DialogActions>
            <Button onClick={this.closeLogoutConfirm} color="primary">
              No
            </Button>
            <Button onClick={this.handleLogout} color="primary" autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

NavigationPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps({trainee}) {
  return {
    trainee,
  };
}

export default connect(mapStateToProps)(withStyles(styles)(NavigationPage));
