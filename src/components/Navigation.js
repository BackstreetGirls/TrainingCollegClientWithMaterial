/**
 * Created by hyx on 2018/4/27.
 */
import React from 'react';
import {connect} from 'dva';
import {message} from 'antd';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from 'material-ui/SwipeableDrawer';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog';

import './css/Navigation.css';
import LoginForm from '../components/LoginForm';

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
  };

  toggleDrawer = (state) => () => {
    this.setState({
      open_drawer: state,
    });
  };

  openLoginForm = () => {
    this.setState({open_loginForm: true});
  };

  closeLoginForm = () => {
    this.setState({open_loginForm: false});
  };

  handleLogin = (e) => {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "" || password === "") {
      message.warning("Please type in your email and password!");
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
        // if(value){
        //   this.props.history.push("/Trainee/ChooseCourseWithClass");
        // }
        this.setState({open_loginForm: false});
      });
    }
    else {
      message.warning("invalid email!");
    }
  };


  render() {

    const {classes} = this.props;
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const sideList = (
      <div className={classes.list}>
        // todo
      </div>
    );

    return (
      <div>
        <AppBar position="static" color="white">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.toggleDrawer(true)}
            >
              <MenuIcon/>
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              TrainingCollege
            </Typography>
            <Button color="inherit" onClick={this.openLoginForm}>Login</Button>
            <Button color="inherit">Register</Button>
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
          open={this.state.open_drawer}
          onClose={this.toggleDrawer(false)}
          onOpen={this.toggleDrawer(true)}
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
          <DialogTitle id="form-dialog-title">Login</DialogTitle>
          <DialogContent>
            <LoginForm/>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.closeLoginForm} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleLogin} color="primary">
              Subscribe
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
