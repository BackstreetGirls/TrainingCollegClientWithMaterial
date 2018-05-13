import React from 'react';
import {Table, Input, Icon, Button, Popconfirm, Row, Col} from 'antd';
import {withStyles} from "material-ui/styles/index";
import style from "./css/orderTable.css"

const styles = {

  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

const columns = [{
  dataIndex: 'name',
  render: text => <a href="javascript:;">{text}</a>,
}, {
  className: 'column-money',
  dataIndex: 'money',
}, {
  dataIndex: 'address',
}];

const data = [{
  key: '1',
  name: 'John Brown',
  money: '￥300,000.00',
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  money: '￥1,256,000.00',
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  money: '￥120,000.00',
  address: 'Sidney No. 1 Lake Park',
}];

class EditableCell extends React.Component {
  state = {
    value: this.props.value,
    imagesrc: this.props.imagesrc,
  }

  render() {
    const { value, imagesrc } = this.state;
    return (
      <div className="editable-cell">
        {value}
        <img src={imagesrc}/>
      </div>
    );
  }
}

class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [{
      title: '课程名称',
      dataIndex: 'name',
      width: '30%',
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
                <button>立即支付</button>
            </div>
            <div>
              <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(record.key)}>
                <a href="javascript:;">取消支付</a>
              </Popconfirm>
            </div>
            </div>
          )
        }
      }
      ,
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
      }, {
        key: '0',
        imagesrc: 'src/assets/course/course1.png',
        name: 'Angular4: 从入门到实战',
        price: '1186',
        amount: '1',
        payment: '1186',
        state: '等待支付',
        way: '支付方式',
      }],
      count: 2,
    };
  }
  onCellChange = (key, dataIndex) => {
    return (value) => {
      const dataSource = [...this.state.dataSource];
      const target = dataSource.find(item => item.key === key);
      if (target) {
        target[dataIndex] = value;
        this.setState({ dataSource });
      }
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
        <Table bordered dataSource={dataSource} columns={columns} />
      </div>
    );
  }
}


export default withStyles(styles,style)(EditableTable);
