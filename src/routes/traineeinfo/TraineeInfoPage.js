/**
 * Created by CLL on 18/4/30.
 */
import React from 'react';
import {connect} from 'dva';
import {Card, Icon, Modal, Form, Input, Button} from 'antd';
import styles from '../css/TraineeInfoPage.css';
import Navigation from '../../components/Navigation';


const {Meta} = Card;
const FormItem = Form.Item;

function level_info() {
  Modal.info({
    title: '会员等级规则',
    content: (
      <div>
        <p>
          累计消费满100元 --1级<br/>
          累计消费满200元 --2级<br/>
          累计消费满500元 --3级<br/>
          累计消费满1000元 --4级<br/>
          累计消费满2000元 --5级<br/>
          累计消费满5000元 --6级<br/>
          累计消费满10000元 --7级<br/>
          累计消费满20000元 --8级<br/>
          累计消费满50000元 --9级<br/>
          累计消费满100000元 --10级
        </p>
      </div>
    ),
    onOk() {
    },
    okText: "我知道了",
  });
}

function discount_info() {
  Modal.info({
    title: '优惠折扣规则',
    content: (
      <div>
        <p>
          累计消费满100元 --0.99折<br/>
          累计消费满200元 --0.98折<br/>
          累计消费满500元 --0.95折<br/>
          累计消费满1000元 --0.90折<br/>
          累计消费满2000元 --0.88折<br/>
          累计消费满5000元 --0.85折<br/>
          累计消费满10000元 --0.80折<br/>
          累计消费满20000元 --0.77折<br/>
          累计消费满50000元 --0.75折<br/>
          累计消费满100000元 --0.70折
        </p>
      </div>
    ),
    onOk() {
    },
    okText: "我知道了",
  });
}

function credit_info() {
  Modal.info({
    title: '会员积分规则',
    content: (
      <div>
        <p>
          单笔消费每满100元，可获得5点积分。<br/>
          1点积分可在购买课程时可抵扣1元金额。
        </p>
      </div>
    ),
    onOk() {
    },
    okText: "我知道了",
  });
}

const CreditsExchangeForm = Form.create()(
  (props) => {
    const {visible, onCancel, onCreate, form} = props;
    const {getFieldDecorator} = form;
    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 4},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 16},
      },
    };

    return (
      <Modal
        visible={visible}
        title="积分兑换"
        okText="兑换"
        cancelText="取消"
        onCancel={onCancel}
        onOk={onCreate}
      >
        <Form layout="vertical" style={{width: '100%', marginTop: 20, marginLeft: 30}}>
          <FormItem {...formItemLayout} label="兑换积分">
            {getFieldDecorator('credits', {
              rules: [{required: true, message: '请输入您要兑换的积分数额！'}],
            })(
              <Input/>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="银行卡号">
            {getFieldDecorator('identity', {
              rules: [{required: true, message: '请输入您的积分兑换入的银行卡号！'}],
            })(
              <Input/>
            )}
          </FormItem>
        </Form>
      </Modal>
    );
  }
);

class TraineeInfoPage extends React.Component {


  state = {
    visible: false,
  };

  showCreditsExchangeModal = () => {
    this.setState({visible: true});
  };

  handleCancel = () => {
    this.setState({visible: false});
  };

  handleCreate = () => {
    const form = this.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      const param = {
        ...values,
        trainee_id: this.props.trainee.trainee_id,
      };
      this.props.dispatch({
        type: 'trainee/creditsExchange',
        payload: {
          ...param,
        },
      });
      form.resetFields();
      this.setState({visible: false});
      // 1s后刷新本页面
      this.timer = setInterval(() => {
        window.location.reload(true);
      }, 1000);
    });
  };

  saveFormRef = (form) => {
    this.form = form;
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <Navigation/>
        <div className={styles.inner_wrapper}>
          <p className={styles.welcome}>
            会员中心
          </p>
          <Card
            title="我的会员信息"
            className={styles.card}
            // cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
            actions={[
              <span onClick={level_info}>
                <Icon type="question-circle-o" style={{marginRight: 2}}/>
                查看会员等级规则
              </span>,
              <span onClick={discount_info}>
                <Icon type="question-circle-o" style={{marginRight: 2}}/>
                查看折扣优惠规则
              </span>,
              <span onClick={credit_info}>
                <Icon type="question-circle-o" style={{marginRight: 2}}/>
                查看会员积分规则
              </span>
            ]}
            extra={
              <div>
                <p>陈俐俐</p>
                <p>1179028267@qq.com</p>

              </div>

            }
          >
            <Meta
              title="累计消费(¥)"
              description={3435 + "元"}
            /><br/>
            <Meta
              title="会员等级"
              description={5 + "级"}
            /><br/>
            <Meta
              title="可享折扣优惠"
              description={0.88 === 1 ? "暂无可使用优惠折扣" : 0.88 + "折"}
            /><br/>
            <Meta
              title="会员积分"
              description={2000 + "分"}
            />
            <Button onClick={this.showCreditsExchangeModal} style={{marginLeft:'80%'}}>积分兑换</Button>
          </Card>
          <CreditsExchangeForm
            ref={this.saveFormRef}
            visible={this.state.visible}
            onCancel={this.handleCancel}
            onCreate={this.handleCreate}
          />
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
