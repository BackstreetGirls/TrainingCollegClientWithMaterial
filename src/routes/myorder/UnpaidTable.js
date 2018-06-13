import React, {Fragment} from 'react';
import {Table, Popover, Popconfirm, Rate, Modal, message, Tabs} from 'antd';
import {withStyles} from "material-ui/styles/index";
import orderTableStyle from "../css/orderTable.css"
import Button from 'material-ui/Button';

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

import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

import tileData from "../../utils/FixedData";
import ClassesGrid from '../../components/ClassesGrid';
const TabPane = Tabs.TabPane;

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


class EditableCell extends React.Component {
  state = {
    value: this.props.value,
    imagesrc: this.props.imagesrc,
    visible: false,
    password: '',
    showPassword: false,
    way:'bank',
  };

  render() {
    const {value, imagesrc} = this.state;
    return (
      <div className="editable-cell">
        <img className={orderTableStyle.cell_image} alt="load false" src={imagesrc}/>{value}
      </div>
    );
  }
}

const LineItemRow = ({record, ...restProps}) => (
  <Fragment>
    <tr>
      <td colSpan="1" style={{background: "#fbfbfb"}}>
        orderId：{record.no}
      </td>
      <td colSpan="4" style={{background: "#fbfbfb"}}>
        institution：{record.institute}
      </td>
      <td colSpan="2" style={{background: "#fbfbfb"}}>
        date：{record.date}
      </td>
    </tr>
    <tr {...restProps} />
  </Fragment>
);

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class OrderTable extends React.Component {
  handleRow = record => ({
    record
  });

  constructor(props) {
    super(props);
    this.columns = [{
      title: 'Name',
      dataIndex: 'name',

      render: (text, record) => (
        <EditableCell
          value={text}
          imagesrc={record.imagesrc}
        />
      ),
    }, {
      title: 'Price($)',
      dataIndex: 'price',
    }, {
      title: 'Amount',
      dataIndex: 'amount',
    }, {
      title: 'Payment',
      dataIndex: 'payment',
    }, {
      title: 'State',
      dataIndex: 'state',
    }, {
      title: 'Way',
      dataIndex: 'way',
    }, {
      title: 'Operation',
      dataIndex: 'operation',
      render: (text, record) => {
        const {classes} = this.props;

        if (record.state === 'Unpaid') {
          return (
            <div>
              <div>
                <Button color="primary" onClick={this.showPayInfo}>Pay</Button>
                <Modal
                  title="Choose Pay Way"
                  visible={this.state.visible}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                >
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
                </Modal>
              </div>
              <div>
                <Popconfirm title="Sure to cancle?" onConfirm={() => this.onCancle(record.key)}>
                  <Button style={{fontSize:"3px"}}>Cancle</Button>
                </Popconfirm>
                <Dialog
                  fullScreen
                  open={this.state.open}
                  onClose={this.handleClose}
                  TransitionComponent={Transition}
                >
                  <AppBar className={classes.appBar}>
                    <Toolbar>
                      <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                        <CloseIcon />
                      </IconButton>
                      We recommend some other courses for you
                      {/*<Typography variant="title" color="inherit" className={classes.flex}>*/}
                        {/*We recommend some other courses for you*/}
                      {/*</Typography>*/}
                    </Toolbar>
                  </AppBar>
                    <div className={classes.margin}>
                      <Tabs defaultActiveKey="1">
                        <TabPane tab="All" key="1">
                          <div>
                            <ClassesGrid title=" " tileData={tileData.courses}/>
                          </div>
                          {/*分页*/}

                        </TabPane>
                        <TabPane tab="Computer Science" key="2">
                          <div>
                            <ClassesGrid title=" " tileData={tileData.courses}/>
                          </div>

                        </TabPane>
                        <TabPane tab="Social Science" key="3">
                          <div>
                            <ClassesGrid title=" " tileData={tileData.courses}/>
                          </div>

                        </TabPane>
                        <TabPane tab="Humanities and Arts" key="4">
                          <div>
                            <ClassesGrid title=" " tileData={tileData.courses}/>
                          </div>

                        </TabPane>
                        <TabPane tab="Language Learning" key="5">
                          <div>
                            <ClassesGrid title=" " tileData={tileData.courses}/>
                          </div>

                        </TabPane>
                        <TabPane tab="Economics" key="6">
                          <div>
                            <ClassesGrid title=" " tileData={tileData.courses}/>
                          </div>

                        </TabPane>
                      </Tabs>
                    </div>
                </Dialog>
              </div>
            </div>
          )
        } else if (record.state === 'Paid') {
          return (
            <div>
              <Popover content={<Rate onKeyDown={() => this.onRate(record.key)}></Rate>}>
                <Button color="primary">Rate</Button>
              </Popover>
            </div>
          )
        }
      },
    }];

    this.state = {
      dataSource: [
        {
          no: '2018052311328',
          institute: 'Sparks Education',
          date: '2018-6-23',
          key: '1',
          imagesrc: 'src/assets/Recommendation/recommendation1.png',
          name: 'Master Python',
          price: '129.00',
          amount: '1',
          payment: '129.00',
          state: 'Unpaid',
          way: '-',
          description: '2018-5-10',
        },
        {
        no: '2018052311329',
        institute: 'Sparks Education',
        date: '2018-6-23',
        key: '2',
        imagesrc: 'src/assets/Recommendation/recommendation1.png',
        name: 'Master Python',
        price: '129.00',
        amount: '1',
        payment: '129.00',
        state: 'Unpaid',
        way: '-',
        description: '2018-5-10',
      }],
      count: 2,
    };
  }

  onCancle = (key) => {
    const dataSource = [...this.state.dataSource];
    this.setState({dataSource: dataSource.filter(item => item.key !== key)});
    this.setState({ open: true });
  };

  showPayInfo = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    message.config({
      top: 10,
      duration: 2,
      maxCount: 3,
    });
    message.success('Pay successfully!');
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };


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

  render() {
    const {dataSource} = this.state;
    const columns = this.columns;

    const components = {
      body: {
        row: LineItemRow
      }
    };
    return <Table bordered components={components} onRow={this.handleRow} columns={columns} dataSource={dataSource}/>;
  }

}

export default withStyles(styles,orderTableStyle)(OrderTable);
