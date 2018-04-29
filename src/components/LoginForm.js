/**
 * Created by hyx on 2018/4/29.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import TextField from 'material-ui/TextField';

import './css/Form.css';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});

class LoginForm extends React.Component {

  render() {
    const {classes} = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="email"
          label="Email"
          // placeholder="e.g. abc@gmail.com"
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          margin="normal"
        />
        <br/>
        <TextField
          id="password"
          label="Password"
          InputLabelProps={{
            shrink: true,
          }}
          type="password"
          autoComplete="current-password"
          fullWidth
          margin="normal"
        />
      </form>
    )
  }
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(LoginForm);
