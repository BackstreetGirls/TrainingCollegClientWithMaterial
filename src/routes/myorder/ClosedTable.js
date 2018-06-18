import React, {Fragment} from 'react';
import {Table, Popconfirm, Rate, Button} from 'antd';
import {withStyles} from "material-ui/styles/index";
import style from "../css/orderTable.css"


class EditableCell extends React.Component {
  state = {
    name: this.props.value,
    imagesrc: this.props.imagesrc,
  };

  render() {
    const {name, imagesrc} = this.state;
    return (
      <div className="editable-cell">
        <div style={{fontWeight: 'bold', marginBottom: '6px', color: 'black'}}>{name}</div>
        <img className={style.cell_image} alt="load false" src={imagesrc}/>
      </div>
    );
  }
}

const LineItemRow = ({record, ...restProps}) => (
  <Fragment>
    <tr>
      <td colSpan="1" style={{background: "#fbfbfb"}}>
        OrderId：{record.no}
      </td>
      <td colSpan="4" style={{background: "#fbfbfb"}}>
        Institution：{record.institute}
      </td>
      <td colSpan="3" style={{background: "#fbfbfb"}}>
        Date：{record.date}
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
    },{
      title: 'Rate',
      dataIndex: 'rate',
      render: (text, record) => {

        if (record.state === 'Closed') {
          if(record.rate === -1) {
            return (
              <div>
                -
              </div>
            )
          }else{
            return(
              <div style={{textAlign:'center'}}>
                <Rate disabled value={record.rate} style={{display: "block", marginBottom:'10px'}}></Rate>
              </div>
            )
          }
        }

      }
    }, {
      title: 'Operation',
      dataIndex: 'operation',
      render: (text, record) => {

        return(
          <div>
            <Popconfirm title="Sure to delete?" onConfirm={() => this.onCancle(record.key)}>
              <Button type="danger" style={{borderRadius: '0'}}>Delete</Button>
            </Popconfirm>
          </div>
        )

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
        state: 'Closed',
        way: 'AliPay',
        rate: 4,
        description: '2018-6-18',
      }, {
        no: '2018052311329',
        institute: 'Sparks Education',
        date: '2018-6-23',
        key: '1',
        imagesrc: 'src/assets/Recommendation/recommendation1.png',
        name: 'Master Python',
        price: '129',
        amount: '1',
        payment: '129',
        state: 'Closed',
        way: '-',
        rate: -1,
        description: '2018-5-10',
      }],
      count: 2,
    };
  }

  onCancle = (key) => {
    const dataSource = [...this.state.dataSource];
    this.setState({dataSource: dataSource.filter(item => item.key !== key)});
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
