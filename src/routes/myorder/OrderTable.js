import React, {Fragment} from 'react';
import {Table,Popconfirm, Rate, message, Button, Modal} from 'antd';
import orderTableStyle from "../css/orderTable.css"
import {withStyles} from "material-ui/styles/index";
import style from "../css/orderTable.css"
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

class EditableCell extends React.Component {
  state = {
    name: this.props.name,
    imagesrc: this.props.imagesrc,
  };

  render() {
    const {name, imagesrc} = this.state;
    return (
      <div className="editable-cell">
        <img className={style.cell_image} alt="load false" src={imagesrc}/>{name}
      </div>
    );
  }
}

const LineItemRow = ({record, ...restProps}) => (
  <Fragment>
    <tr style={{fontSize: 'small', borderCollapse:'separate', borderSpacing:'0px 10px'}}>
      <td colSpan="1" style={{background: "#fbfbfb"}}>
        OrderId：{record.no}
      </td>
      <td colSpan="4" style={{background: "#fbfbfb"}}>
        Institution：{record.institute}
      </td>
      <td colSpan="2" style={{background: "#fbfbfb"}}>
        Date：{record.date}
      </td>
    </tr>
    <tr style={{align: 'center'}} {...restProps} />
  </Fragment>
);

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
          name={text}
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
                <Button  style={{width: '75px', borderRadius:'0px'}} type="primary" onClick={this.showPayInfo}>Pay</Button>
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
                    <Divider style={{width: '46%', marginTop: '2%', marginLeft: '24%'}}/>
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
                          style={{width: '180px'}}
                          margin="normal"
                        />
                        <br/>
                        <Input
                          label="password"
                          id="bank_password"
                          placeholder="length 6"
                          type={this.state.showPassword ? 'text' : 'password'}
                          value={this.state.password}
                          style={{width: '180px'}}
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
                      <Typography component="p" style={{marginLeft:'16%'}}>
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
                            style={{width: '180px'}}
                            margin="normal"
                          />
                          <br/>
                          <Input
                            id="alipay_password"
                            placeholder="password"
                            type={this.state.showPassword ? 'text' : 'password'}
                            value={this.state.password}
                            style={{width: '180px'}}
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
                            style={{width: '180px'}}
                            margin="normal"
                          />
                          <br/>
                          <Input
                            label="password"
                            id="wechat_password"
                            placeholder="password"
                            type={this.state.showPassword ? 'text' : 'password'}
                            value={this.state.password}
                            style={{width: '180px'}}
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
                <Popconfirm title="Sure to cancel?" onConfirm={() => this.onCancel(record)}>
                  <Button  ghost style={{marginTop: '2px', width: '75px', color: 'red', border: '0px', borderRadius:'0px'}}>Cancel</Button>
                </Popconfirm>
              </div>
            </div>
          )
        } else if (record.state === 'Paid') {
          return (
            <div>
              <Rate allowClear={false} onChange={this.onRate}></Rate>
            </div>
          )
        } else if (record.state === 'Closed') {
          if(record.rate === -1) {
          return (
            <div>
              <div>
                <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(record)}>
                  <Button size="small" color="secondary" variant="raised">Delete</Button>
                </Popconfirm>
              </div>
            </div>
          )
        }else{
          return(
            <div>
              <Rate disabled value={record.rate} style={{display: "block"}}></Rate>
              <div>
                <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(record)}>
                  <Button size="small" color="secondary" variant="raised">Delete</Button>
                </Popconfirm>
              </div>
            </div>
          )
        }
        }
      },
    }];

    this.state = {
      dataSource: [{
        no: '2018052211328',
        institute: 'Nanjing University',
        date: '2018-6-18',
        key: '0',
        imagesrc: 'src/assets/Recommendation/recommendation0.jpg',
        name: 'Computer Application in Economic Management',
        price: '99.00',
        amount: '1',
        payment: '99.00',
        state: 'Paid',
        way: 'AliPay',
        rate: -1,
        description: '2018-6-18',
      }, {
        no: '2018052311329',
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
        rate: -1,
        description: '2018-5-10',
      }],
      count: 2,
    };
  }

  onCancel = (record) => {
    record.state = 'Closed';
  };

  onDelete = (record) => {
    const dataSource = [...this.state.dataSource];
    this.setState({dataSource: dataSource.filter(item => item.key !== record.key)});
  }

  onRate = () => {
    message.config({
      top: 10,
      duration: 2,
      maxCount: 3,
    });
    message.success('Rate successfully!');
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
    return <Table bordered components={components} onRow={this.handleRow} columns={columns} dataSource={dataSource}
    />;
  }

}

export default withStyles(styles)(OrderTable);
