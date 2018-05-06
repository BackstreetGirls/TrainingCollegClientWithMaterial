/**
 * Created by CLL on 18/5/6.
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
    margin: theme.spacing.unit,
    float:'right'
  },
  input: {
    display: 'none',
  },

});

class ChangePasswordForm extends React.Component {

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


  render() {
    const {classes} = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">


        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="password_old">Old Password</InputLabel>
          <Input
            id="password_old"
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
          <InputLabel htmlFor="password_new">New Password</InputLabel>
          <Input
            id="password_new"
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
        <div className={classes.margin} style={{width: '100%'}}>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item sm={9} xs={8}>

            </Grid>
            <Grid item sm={3} xs={4}>
              <Button variant="raised" color="primary" className={classes.button}>
                Modify
              </Button>
            </Grid>
          </Grid>
        </div>

      </form>
    )
  }
}

ChangePasswordForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps({trainee}) {
  return {
    trainee,
  };
}

export default connect(mapStateToProps)(withStyles(styles)(ChangePasswordForm));
