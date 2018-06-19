import React, {Fragment} from 'react';
import {Table, Rate, message} from 'antd';
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
    <tr style={{fontSize: 'small', background: 'rgba(246,246,246)'}}>
      <td colSpan="1">
        OrderId：{record.no}
      </td>
      <td colSpan="4">
        Institution：{record.institute}
      </td>
      <td colSpan="2">
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
    }, {
      title: 'Operation',
      dataIndex: 'operation',
      render: (text, record) => {

        if (record.state === 'Paid') {
          return (
            <div>
              <Rate onChange={() => this.onRate(record.key)}> </Rate>
            </div>
          )
        }
      },
    }];

    this.state = {
      dataSource: [],

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
    return <Table bordered components={components} onRow={this.handleRow} columns={columns} dataSource={dataSource}

    />;
  }

}

export default withStyles(style)(OrderTable);
