import React, {Fragment} from 'react';
import {Table, Popover, Rate, message} from 'antd';
import {withStyles} from "material-ui/styles/index";
import style from "../css/orderTable.css"
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

        if (record.state === 'Paid') {
          return (
            <div>
              <Popover content={<Rate onChange={() => this.onRate(record.key)}> </Rate>}>
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
        rate: -1,
        description: '2018-5-9',
      }],
      count: 1,
    };
  }

  onRate = (key) => {
    console.log(key);
    const dataSource = [...this.state.dataSource];
    this.setState({dataSource: dataSource.filter(item => item.key !== key)});
    message.config({
      top: 10,
      duration: 2,
      maxCount: 3,
    });
    message.success('Rate Successfully!');
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
