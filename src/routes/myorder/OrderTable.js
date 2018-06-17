import React, {Fragment} from 'react';
import {Table, Popover, Popconfirm, Rate} from 'antd';
import {withStyles} from "material-ui/styles/index";
import style from "../css/orderTable.css"
import Button from 'material-ui/Button';

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

        if (record.state === 'Unpaid') {
          return (
            <div>
              <div>
                <Button  color="primary">Pay</Button>
              </div>
              <div>
                <Popconfirm title="Sure to cancle?" onConfirm={() => this.onCancle(record)}>
                  <Button style={{fontSize:"3px"}}>Cancle</Button>
                </Popconfirm>
              </div>
            </div>
          )
        } else if (record.state === 'Paid') {
          return (
            <div>
              <Popover content={<Rate value={record.rate} onChange={()=>this.onRate({record})}> </Rate>}>
                <Button color="primary">Rate</Button>
              </Popover>
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

  onCancle = (record) => {
    record.state = 'Closed';
  };

  onDelete = (record) => {
    const dataSource = [...this.state.dataSource];
    this.setState({dataSource: dataSource.filter(item => item.key !== record.key)});
  }

  onRate = (record) => {
    record.state = 'Closed';
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
