/**
 * Created by CLL on 18/5/1.
 */
import React from 'react';
import {connect} from 'dva';
import {Form, Icon, Input, Button, Tooltip, Select, message} from 'antd';
import styles from '../css/ChangePasswordPage.css';
import Navigation from '../../components/Navigation';


const FormItem = Form.Item;
const Option = Select.Option;

class TraineeEditInfoForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) {
        return;
      }

      let password_previous = values['password_previous'];
      if (password_previous === undefined) {
        password_previous = "";
      }

      let password_new = values['password_new'];
      if (password_new === undefined) {
        password_new = "";
      }

      let password_new_repeat = values['password_new_repeat'];
      if (password_new_repeat === undefined) {
        password_new_repeat = "";
      }

      if (password_new === "" && password_previous !== "") {
        message.error("新密码不能为空！");
        return
      }

      if (password_new_repeat !==password_new) {
        message.error("新密码输入不一致！");
        return
      }

      let is_active = values['is_active'];
      if (is_active === '不注销') {
        is_active = "true";
      } else {
        is_active = "false";
      }

      const fieldsValue = {
        ...values,
        email: this.props.trainee.trainee_email,
        password_previous: password_previous,
        password_new: password_new,
        password_new_repeat:password_new_repeat,
        'trainee_id': this.props.trainee.trainee_id,
        'expenditure': this.props.trainee.expenditure,
        'credit': this.props.trainee.credit,
        is_active: is_active,
      };
      this.props.dispatch({
        type: 'trainee/traineeEditInfo',
        payload: {
          ...fieldsValue,
        },
      }).then(value => {
        // 如果修改信息成功则先确认会员是否被注销
        if (value) {
          this.props.dispatch({
            type: 'trainee/isActive',
            payload: {
              trainee_id: this.props.trainee.trainee_id
            },
          }).then(value => {
            // 若未注销会员，则刷新页面，获取最新信息
            if (value) {
              this.timer = setInterval(() => {
                window.location.reload(true);
              }, 1000);
            }
            // 若会员被注销，则退回homepage
            else {
              window.location.replace("/")
            }
          });
        }
      });
    });
  };

  render() {
    const {getFieldDecorator} = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 8},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 16},
      },
    };

    const buttonLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    return (
      <div className={styles.wrapper} style={{height: '80%'}}>
        <Navigation/>
        <Form onSubmit={this.handleSubmit} className={styles.edit_form}>
          <p className={styles.welcome}>
            修改密码
          </p>
          <FormItem
            {...formItemLayout}
            label="电子邮箱"
          >
            <Tooltip
              trigger={['hover']}
              title="邮箱一经设置无法修改"
              placement="topLeft"
              overlayClassName="numeric-input"
            >
              <Input
                prefix={<Icon type="mail" style={{color: 'rgba(0,0,0,.25)'}}/>}
                disabled={true}
                defaultValue={"1179028267@qq.com"}
              />
            </Tooltip>
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="原密码"
          >
            {getFieldDecorator('password_previous', {
              // rules: [{required: true, message: '请输入您的原密码'}],
            })(
              <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"/>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="新密码"
          >
            {getFieldDecorator('password_new', {
              // rules: [{required: true, message: '请输入您的新密码'}],
            })(
              <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"/>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="确认新密码"
          >
            {getFieldDecorator('password_new_repeat', {
              // rules: [{required: true, message: '请输入您的新密码'}],
            })(
              <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"/>
            )}
          </FormItem>
          <FormItem
            {...buttonLayout}
          >
            <Button type="primary" htmlType="submit" className={styles.button}>
              提交
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const TraineeEditInfoPage = Form.create()(TraineeEditInfoForm);

function mapStateToProps({trainee}) {
  return {
    trainee,
  };
}

export default connect(mapStateToProps)(TraineeEditInfoPage);
