import React from 'react';
import {Table, Input, Icon, Button, Popconfirm, Row, Col} from 'antd';
import {withStyles} from "material-ui/styles/index";
import style from "./css/orderTable.css"

class EditableCell extends React.Component {
  state = {
    value: this.props.value,
    imagesrc: this.props.imagesrc,
  }

  render() {
    const { value, imagesrc } = this.state;
    return (
      <div className="editable-cell">
        <img className="cell-image" src={imagesrc}/>{value}
      </div>
    );
  }
}

class OrderTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [{
      title: '课程名称',
      dataIndex: 'name',

      render: (text, record) => (
        <EditableCell
          value={text}
          imagesrc={record.imagesrc}
        />
      ),
    }, {
      title: '单价',
      dataIndex: 'price',
    }, {
      title: '数量',
      dataIndex: 'amount',
    }, {
      title: '实付款',
      dataIndex: 'payment',
    },{
      title: '支付状态',
      dataIndex: 'state',
    }, {
      title: '支付方式',
      dataIndex: 'way',
    },{
      title: '操作状态',
      dataIndex: 'operation',
      render: (text, record) => {
        if (record.state=='等待支付') {
          return (
            <div>
            <div>
                <Button>立即支付</Button>
            </div>
            <div>
              <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(record.key)}>
                <a href="javascript:;">取消支付</a>
              </Popconfirm>
            </div>
            </div>
          )
        }
      },
    }];

    this.state = {
      dataSource: [{
        key: '0',
        imagesrc: 'src/assets/course/course1.png',
        name: 'Angular4: 从入门到实战',
        price: '1186',
        amount: '1',
        payment: '1186',
        state: '等待支付',
        way: '支付方式',
        description: '2018-5-9',
      }, {
        key: '1',
        imagesrc: 'src/assets/course/course2.png',
        name: 'Vue: 从入门到开发',
        price: '1186',
        amount: '1',
        payment: '1186',
        state: '等待支付',
        way: '支付方式',
        description: '2018-5-10',
      }],
      count: 2,
    };
  }

  onDelete = (key) => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  }

  render() {
    const { dataSource } = this.state;
    const columns = this.columns;
    return (
      <div>
        <Table bordered dataSource={dataSource} columns={columns} expandedRowRender={record =>
          <div>
            <Row>
              <Col span={8}>2018-5-11</Col>
              <Col span={8}>orderID: TZ-123123-000001</Col>
              <Col span={8}>Institute: Angular University</Col>
            </Row>
          </div>
        }/>
      </div>
    );
  }
}


export default withStyles(style)(OrderTable);
