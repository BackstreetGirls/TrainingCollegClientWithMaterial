/**
 * Created by CLL on 18/4/27.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Button from 'material-ui/Button'
import Divider from 'material-ui/Divider';
import Input, {InputAdornment} from 'material-ui/Input';
import {FormControl} from 'material-ui/Form';
import TextField from 'material-ui/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import alipay_pay from '../../assets/alipay.png';
import wechat_pay from '../../assets/wechat_pay.png';


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
  imgContainer:{
    marginLeft: '15%',
    width:'50%',
    display: 'flex',
    flexDirection: 'row',
  },
  formControl: {
    marginLeft: '25%',
    minWidth: 120,
  },
  formControl2:{
    marginLeft: '15%',
    minWidth: 120,
  }

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
              label="Bank account"
              placeholder="length 18"
              className={classes.textField}
              margin="normal"
            />
            <br/>
            <Input
              label="password"
              id="bank_password"
              placeholder="length 6"
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
          <Typography component="p" style={{marginLeft:'20%'}}>
            Please scan the QR code or login your account.
          </Typography>
          <div className={classes.imgContainer}>
            <img style={{width:100,height:100,marginTop:'5%'}} alt="load false" src={alipay_pay}/>
            <FormControl className={classes.formControl2}>
            <TextField
              required
              InputLabelProps={{
                shrink: true,
              }}
              id="alipay_name"
              label="Alipay"
              placeholder="mail or telephone"
              className={classes.textField}
              margin="normal"
            />
            <br/>
            <Input
              id="alipay_password"
              placeholder="password"
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
        <div id="wechat_input" style={{display:this.state.way==='wechat'?'block':'none'}}>
          <Typography component="p" style={{marginLeft:'20%'}}>
            Please scan the QR code or login your account.
          </Typography>
          <div className={classes.imgContainer}>
            <img style={{width:100,height:100,marginTop:'5%'}} alt="load false" src={wechat_pay}/>
            <FormControl className={classes.formControl2}>
            <TextField
              required
              InputLabelProps={{
                shrink: true,
              }}
              id="wechat_name"
              label="Wechat"
              placeholder="wechat or telephone"
              className={classes.textField}
              margin="normal"
            />
            <br/>
            <Input
              label="password"
              id="wechat_password"
              placeholder="password"
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
