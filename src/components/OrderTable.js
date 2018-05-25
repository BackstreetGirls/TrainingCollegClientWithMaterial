import React,{Fragment} from 'react';
import {Table, Input, Icon, Button, Popconfirm, Rate} from 'antd';
import {withStyles} from "material-ui/styles/index";
import style from "./css/orderTable.css"

class EditableCell extends React.Component {
  state = {
    value: this.props.value,
    imagesrc: this.props.imagesrc,
  }

  render() {
    const {value, imagesrc } = this.state;
    return (
      <div className="editable-cell">
        <img className={style.cell_image} src={imagesrc}/>{value}
      </div>
    );
  }
}

const LineItemRow = ({ record, ...restProps }) => (
  <Fragment>
    <tr>
      <td colSpan="1" style={{ background: "#fbfbfb" }}>
        订单号：{record.no}
      </td>
      <td colSpan="4" style={{ background: "#fbfbfb" }}>
        机构：{record.institute}
      </td>
      <td colSpan="2" style={{ background: "#fbfbfb" }}>
        日期：{record.date}
      </td>
    </tr>
    <tr {...restProps} />
  </Fragment>
);

class OrderTable extends React.Component {
  handleRow = record => ({
    record
  });

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
        }else if(record.state=='已支付'){
          return(
            <div>
              <Rate/>
              <a href="javascript:;">评分</a>
            </div>
          )
        }
      },
    }];

    this.state = {
      dataSource: [{
        no: '2018052211328',
        institute: '皮皮钰编程培训中心',
        date: '2018-5-22',
        key: '0',
        imagesrc: 'src/assets/course/course1.png',
        name: 'Angular4: 从入门到实战',
        price: '1186',
        amount: '1',
        payment: '1186',
        state: '已支付',
        way: '支付方式',
        description: '2018-5-9',
      }, {
        no: '2018052311329',
        institute: '皮皮钰编程培训中心',
        date: '2018-5-23',
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

    const components = {
      body: {
        row: LineItemRow
      }
    };
    return <Table bordered components={components} onRow={this.handleRow} columns={columns} dataSource={dataSource} />;
  }

}
export default withStyles(style)(OrderTable);
