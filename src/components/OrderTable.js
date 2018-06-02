import React, {Fragment} from 'react';
import {Table, Popover, Popconfirm, Rate} from 'antd';
import {withStyles} from "material-ui/styles/index";
import style from "./css/orderTable.css"
import Button from 'material-ui/Button';

class EditableCell extends React.Component {
  state = {
    value: this.props.value,
    imagesrc: this.props.imagesrc,
  };

  render() {
    const {value, imagesrc} = this.state;
    return (
      <div className="editable-cell">
        <img className={style.cell_image} alt="load false" src={imagesrc}/>{value}
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
      title: 'Price(¥)',
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

        if (record.state === 'Unpaid') {
          return (
            <div>
              <div>
                <Button variant="raised" color="primary">Pay</Button>
              </div>
              <div>
                <Popconfirm title="Sure to cancle?" onConfirm={() => this.onCancle(record.key)}>
                  <Button color="primary">Cancle</Button>
                </Popconfirm>
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
      dataSource: [{
        no: '2018052211328',
        institute: 'Shanghai University of Finance',
        date: '2018-5-12',
        key: '0',
        imagesrc: 'src/assets/Recommendation/recommendation0.jpg',
        name: 'Computer Application in Economic Management',
        price: '99',
        amount: '1',
        payment: '99',
        state: 'Paid',
        way: 'AliPay',
        description: '2018-5-9',
      }, {
        no: '2018052311329',
        institute: 'The University of Michigan',
        date: '2018-6-23',
        key: '1',
        imagesrc: 'src/assets/Recommendation/recommendation1.png',
        name: 'Master Python',
        price: '129',
        amount: '1',
        payment: '129',
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
  };

  onRate = (key) => {

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

export default withStyles(style)(OrderTable);
