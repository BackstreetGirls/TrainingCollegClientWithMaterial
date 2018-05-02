/**
 * Created by hyx on 2018/4/29.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Input, {InputLabel} from 'material-ui/Input';
import {FormControl} from 'material-ui/Form';

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
});

class LoginForm extends React.Component {

  render() {
    const {classes} = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="adornment-password">Email</InputLabel>
          <Input
            id="email_login"
            placeholder="e.g. abc@gmail.com"
          />
        </FormControl>

        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="adornment-password">Password</InputLabel>
          <Input
            id="password_login"
            type='password'
          />
        </FormControl>
      </form>
    )
  }
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginForm);
