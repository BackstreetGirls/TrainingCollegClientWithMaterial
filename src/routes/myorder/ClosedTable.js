import React, {Fragment} from 'react';
import {Table, Popconfirm, Rate} from 'antd';
import Button from 'material-ui/Button';
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
      <td colSpan="3">
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
              <div>
                <Rate disabled value={record.rate} style={{display: "block", marginBottom:'10px'}}/>
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
              <Button variant='raised' style={{borderRadius: '0'}}>Delete</Button>
            </Popconfirm>
          </div>
        )

      },
    }];

    this.state = {
      dataSource: [],
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
