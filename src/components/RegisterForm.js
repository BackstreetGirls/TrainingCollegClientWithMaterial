/**
 * Created by hyx on 2018/4/29.
 */
import React from 'react';
import {connect} from 'dva';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import {message} from 'antd';
import IconButton from 'material-ui/IconButton';
import Input, {InputLabel, InputAdornment} from 'material-ui/Input';
import {FormControl} from 'material-ui/Form';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

import './css/Form.css';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    marginLeft: theme.spacing.unit * 4,
    marginRight: theme.spacing.unit * 4,
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
  button: {
    float: 'right'
  },
});

class RegisterForm extends React.Component {

  state = {
    showPassword: false,
  };

  handleChange = prop => event => {
    this.setState({[prop]: event.target.value});
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPassword = () => {
    this.setState({showPassword: !this.state.showPassword});
  };

  // 发送验证码方法
  sendVerificationCode = () => {
    const email = document.getElementById("email_register").value;

    if (!email) {
      message.warning('Please type in your email!');
      return;
    }

    const param = {
      email: email,
    };

    if (param.email.toString().length > 40) {
      message.warning("Email address cannot be longer than 40 characters!");
      return;
    }

    // 判断输入格式是否为email
    const regex = /^(?:\w+\.?)*\w+@(?:\w+\.)*\w+$/;
    if (regex.test(param.email)) {
      message.success("We are sending an email to you, please wait...");
      this.props.dispatch({
        type: 'trainee/sendVerificationCode',
        payload: {
          ...param,
        },
      });
    }
    else {
      message.error("Invalid email address");
    }
  };

  render() {
    const {classes} = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="email_register">Email</InputLabel>
          <Input
            id="email_register"
            placeholder="e.g. abc@gmail.com and max. 40 char"
          />
        </FormControl>

        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="password_register">Password</InputLabel>
          <Input
            id="password_register"
            type={this.state.showPassword ? 'text' : 'password'}
            onChange={this.handleChange('password')}
            placeholder="min. 6 char"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                  onMouseDown={this.handleMouseDownPassword}
                >
                  {this.state.showPassword ? <VisibilityOff/> : <Visibility/>}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="name">Name</InputLabel>
          <Input
            id="name"
            placeholder="real name"
          />
        </FormControl>

        <div className={classes.margin} style={{width: '100%'}}>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item sm={9} xs={8}>
              <FormControl fullWidth>
                <InputLabel htmlFor="verification_code">Verification code</InputLabel>
                <Input id="verification_code"/>
              </FormControl>
            </Grid>
            <Grid item sm={3} xs={4}>
              <Button variant="raised" className={classes.button} onClick={this.sendVerificationCode}>
                Send
              </Button>
            </Grid>
          </Grid>
        </div>
      </form>
    )
  }
}

RegisterForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps({trainee}) {
  return {
    trainee,
  };
}

export default connect(mapStateToProps)(withStyles(styles)(RegisterForm));
