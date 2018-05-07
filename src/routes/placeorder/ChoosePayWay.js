/**
 * Created by CLL on 18/4/27.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Button from 'material-ui/Button'
import Divider from 'material-ui/Divider';
import Input, {InputLabel, InputAdornment} from 'material-ui/Input';
import {FormControl, FormHelperText} from 'material-ui/Form';
import TextField from 'material-ui/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from 'material-ui/IconButton';

const styles = theme => ({
  container: {
    marginLeft: '12%',
    align: 'center'
  },
  button: {
    width: 80,
    height: 80,
    marginLeft: '5%'
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  formControl: {
    marginLeft: '25%',
    minWidth: 120,
  },

});

class ChoosePayWay extends React.Component {
  state = {
    password: '',
    showPassword: false,
    way:'bank',
  };

  render() {
    const {classes} = this.props;

    return (
      <div>
        <div className={classes.container}>
          <Button className={classes.button}
                  style={{backgroundImage: "url(" + require("../../assets/bank.png") + ")"}}
                  onClick={(index)=>{this.changeWayToBank(index)}}
          />
          <Button className={classes.button}
                  style={{backgroundImage: "url(" + require("../../assets/alipay.png") + ")"}}
                  onClick={(index)=>{this.changeWayToAlipay(index)}}
          />
          <Button className={classes.button}
                  style={{backgroundImage: "url(" + require("../../assets/wechat.jpeg") + ")"}}
                  onClick={(index)=>{this.changeWayToWechat(index)}}
          />
        </div>
        <Divider style={{width: '46%', marginTop: '2%', marginLeft: '13%'}}/>
        <div id="bank_input" style={{display:this.state.way==='bank'?'block':'none'}}>
          <FormControl className={classes.formControl}>
            <TextField
              required
              InputLabelProps={{
                shrink: true,
              }}
              id="name"
              label="银行账户"
              placeholder="18位数字"
              className={classes.textField}
              margin="normal"
            />
            <br/>
            <Input
              label="password"
              id="bank_password"
              placeholder="6位密码"
              type={this.state.showPassword ? 'text' : 'password'}
              value={this.state.password}
              onChange={this.handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.handleClickShowPassword}
                    onMouseDown={this.handleMouseDownPassword}
                  >
                    {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
        <div id="alipay_input" style={{display:this.state.way==='alipay'?'block':'none'}}>
          <FormControl className={classes.formControl}>
            <TextField
              required
              InputLabelProps={{
                shrink: true,
              }}
              id="alipay_name"
              label="支付宝账户"
              placeholder="邮箱或手机号码"
              className={classes.textField}
              margin="normal"
            />
            <br/>
            <Input
              id="alipay_password"
              placeholder="密码"
              type={this.state.showPassword ? 'text' : 'password'}
              value={this.state.password}
              onChange={this.handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.handleClickShowPassword}
                    onMouseDown={this.handleMouseDownPassword}
                  >
                    {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
        <div id="wechat_input" style={{display:this.state.way==='wechat'?'block':'none'}}>
          <FormControl className={classes.formControl}>
            <TextField
              required
              InputLabelProps={{
                shrink: true,
              }}
              id="wechat_name"
              label="微信账户"
              placeholder="微信号或手机号码"
              className={classes.textField}
              margin="normal"
            />
            <br/>
            <Input
              label="password"
              id="wechat_password"
              placeholder="密码"
              type={this.state.showPassword ? 'text' : 'password'}
              value={this.state.password}
              onChange={this.handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.handleClickShowPassword}
                    onMouseDown={this.handleMouseDownPassword}
                  >
                    {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
      </div>
    );

  }

  handleChange = prop => event => {
    this.setState({[prop]: event.target.value});
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPassword = () => {
    this.setState({showPassword: !this.state.showPassword});
  };

  changeWayToAlipay=()=>{
    this.setState({way:'alipay'});
  };

  changeWayToBank=()=>{
    this.setState({way:'bank'});
  };

  changeWayToWechat=()=>{
    this.setState({way:'wechat'});
  };
}

ChoosePayWay.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(ChoosePayWay);
