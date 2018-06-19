/**
 * Created by CLL on 18/4/30.
 */
import React from 'react';
import {connect} from 'dva';

import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import {Card, Icon} from 'antd';
import styles from '../css/TraineeInfoPage.css';
import Navigation from '../../components/Navigation';
import {Avatar} from 'antd';
import avatar from '../../assets/avatar.png';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';


const {Meta} = Card;

let id = 0;
function createData(consumption,level) {
  id += 1;
  return { id, consumption,level};
}

const data = [
  createData(100, 1),
  createData(200, 2),
  createData(500, 3),
  createData(1000, 4),
  createData(2000, 5),
  createData(5000, 6),
  createData(10000, 7),
  createData(20000, 8),
  createData(50000, 9),
  createData(100000, 10),
];

let id2 = 0;
function createData2(consumption,discount) {
  id2 += 1;
  return { id2, consumption,discount};
}

const data2 = [
  createData2(100, '1%'),
  createData2(200, '2%'),
  createData2(500, '5%'),
  createData2(1000, '10%'),
  createData2(2000, '12%'),
  createData2(5000, '15%'),
  createData2(10000, '20%'),
  createData2(20000, '23%'),
  createData2(50000, '25%'),
  createData2(100000, '30%'),
];


class TraineeInfoPage extends React.Component {

  state = {
    open: false,
    level:false,
    discount:false,
    credit:false,
    bp:2000,
  };

  //兑换对话框
  handleClickOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});

  };

  exchange=()=>{
    this.setState({open: false});
    this.setState({bp:3000});
  };

  //等级规则
  level_info_close=()=> {
    this.setState({level: false});
  };

  level_info_open=()=>{
    this.setState({level: true});
  };

  //优惠规则
  discount_info_close=()=> {
    this.setState({discount: false});
  };

  discount_info_open=()=>{
    this.setState({discount: true});
  };

  //积分规则
  credit_info_close=()=> {
    this.setState({credit: false});
  };

  credit_info_open=()=>{
    this.setState({credit: true});
  };



  render() {
    return (
      <div className={styles.wrapper}>
        <Navigation/>
        <div className={styles.inner_wrapper}>
          <div className={styles.welcome}>
            <div>
              <Avatar src={avatar} style={{width: 100, height: 100,marginTop:'5%'}}/>

            </div>
          </div>
          <Card
            title="Vip Info"
            className={styles.card}
            // cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
            actions={[
              <Button color="primary" size="small" onClick={(index)=>{this.level_info_open(index)}}>
                <Icon type="question-circle-o" style={{marginRight: 2}}/>
                Vip Level Rule
              </Button>,
              <Button color="primary" size="small" onClick={(index)=>{this.discount_info_open(index)}}>
                <Icon type="question-circle-o" style={{marginRight: 2}}/>
                Discount Rule
              </Button>,
              <Button color="primary" size="small" onClick={(index)=>{this.credit_info_open(index)}}>
                <Icon type="question-circle-o" style={{marginRight: 2}}/>
                Vip BP Rule
              </Button>
            ]}
            extra={
              <div>
                <p>Chen Lily</p>
                <p>1179028267@qq.com</p>

              </div>

            }
          >
            <Meta
              title="Consumption(¥)"
              description={3435}
            /><br/>
            <Meta
              title="Vip Level"
              description={5}
            /><br/>
            <Meta
              title="Discount(% off)"
              description={0.88 === 1 ? "No discount" : "12"}
            /><br/>
            <Meta
              title="BP(point)"
              description={this.state.bp}
            />
            <Button color="primary" variant="raised" onClick={this.handleClickOpen}
                    style={{marginLeft: '80%'}}>EXCHANGE</Button>
          </Card>

          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Exchange BP</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To exchange more BP, please enter the amount of the BP you want to exchange and the bankID of your pay.
              </DialogContentText>
              <div style={{marginLeft:"33%"}}>
                <TextField
                  required
                  InputLabelProps={{
                    shrink: true,
                  }}
                  id="num"
                  label="Amount"
                  type="number"
                  placeholder="1000"
                  margin="normal"
                />
                <br/>
                <TextField
                  autoFocus
                  required
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal"
                  id="name"
                  label="BankId"
                  placeholder="622888888123456789"
                />
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={this.exchange} color="primary">
                Exchange
              </Button>
            </DialogActions>
          </Dialog>

          <Dialog
            open={this.state.level}
            onClose={(index)=>{this.level_info_close(index)}}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title1">Vip Level Rule</DialogTitle>
            <DialogContent>
              <DialogContentText>
                The higher the amount of consumption, the higher the membership grade.
              </DialogContentText>
              <div style={{width:'60%',marginLeft:'20%',marginTop:'3%',maxHeight:260}}>
                <Paper>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Total Consumption(¥)</TableCell>
                        <TableCell>Level</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data.map(n => {
                        return (
                          <TableRow key={n.id}>
                            <TableCell>{n.consumption}</TableCell>
                            <TableCell>{n.level}</TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </Paper>
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={(index)=>{this.level_info_close(index)}} color="primary">
                I KNOW
              </Button>
            </DialogActions>
          </Dialog>

          <Dialog
            open={this.state.discount}
            onClose={(index)=>{this.discount_info_close(index)}}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title2">Discount Rule</DialogTitle>
            <DialogContent>
              <DialogContentText>
                According to different cumulative consumption, give different discount. The higher the amount of consumption, the greater the discounts.
              </DialogContentText>
              <div style={{width:'60%',marginLeft:'20%',marginTop:'3%',maxHeight:260}}>
                <Paper>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Total Consumption(¥)</TableCell>
                        <TableCell>Discount(off)</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data2.map(n => {
                        return (
                          <TableRow key={n.id}>
                            <TableCell>{n.consumption}</TableCell>
                            <TableCell>{n.discount}</TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </Paper>
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={(index)=>{this.discount_info_close(index)}} color="primary">
                I KNOW
              </Button>
            </DialogActions>
          </Dialog>

          <Dialog
            open={this.state.credit}
            onClose={(index)=>{this.credit_info_close(index)}}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title3">VIP BP Rule</DialogTitle>
            <DialogContent>
              <DialogContentText>
                A single consumption of 100 yuan, can get 5 points.<br/>
                1 points can deduct 1 yuan in the course of purchase.
              </DialogContentText>

            </DialogContent>
            <DialogActions>
              <Button onClick={(index)=>{this.credit_info_close(index)}} color="primary">
                I KNOW
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    )
  }
}

function mapStateToProps({trainee}) {
  return {
    trainee,
  };
}

export default connect(mapStateToProps)(TraineeInfoPage);
