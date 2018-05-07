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

import {Card, Icon, Modal, Form, Input} from 'antd';
import styles from '../css/TraineeInfoPage.css';
import Navigation from '../../components/Navigation';
import {Avatar} from 'antd';
import avatar from '../../assets/avatar.png';
const {Meta} = Card;


class TraineeInfoPage extends React.Component {


  state = {
    open: false,
    level:false,
    discount:false,
    credit:false,
  };

  //兑换对话框
  handleClickOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
    // 1s后刷新本页面
    this.timer = setInterval(() => {
      window.location.reload(true);
    }, 1000);
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
              <Avatar src={avatar} style={{width: 100, height: 100}}/>

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
              description={2000}
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
                  type="email"
                />
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleCancel} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleClose} color="primary">
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
              <div style={{marginLeft:"23%"}}>
                <p>
                  Total consumption reached ¥100   --level 1<br/>
                  Total consumption reached ¥200   --level 2<br/>
                  Total consumption reached ¥500   --level 3<br/>
                  Total consumption reached ¥1000  --level 4<br/>
                  Total consumption reached ¥2000  --level 5<br/>
                  Total consumption reached ¥5000  --level 6<br/>
                  Total consumption reached ¥10000 --level 7<br/>
                  Total consumption reached ¥20000 --level 8<br/>
                  Total consumption reached ¥50000 --level 9<br/>
                  Total consumption reached ¥10000 --level 10
                </p>
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
              <div style={{marginLeft:"23%"}}>
                <p>
                  Total consumption reached ¥100   --1% off<br/>
                  Total consumption reached ¥200   --2% off<br/>
                  Total consumption reached ¥500   --5% off<br/>
                  Total consumption reached ¥1000  --10% off<br/>
                  Total consumption reached ¥2000  --12% off<br/>
                  Total consumption reached ¥5000  --15% off<br/>
                  Total consumption reached ¥10000 --20% off<br/>
                  Total consumption reached ¥20000 --23% off<br/>
                  Total consumption reached ¥50000 --25% off<br/>
                  Total consumption reached ¥10000 --30% off
                </p>
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
