import Navigation from '../../components/Navigation'
import EditableTable from '../../components/OrderTable'

import React from 'react';
import ReactDOM from 'react-dom';
import { Tabs, Button, Input } from 'antd';
import {withStyles} from "material-ui/styles/index";


const TabPane = Tabs.TabPane;
const Search = Input.Search;

const operations = <Search
  placeholder="input CourseName/OrderId to search"
  onSearch={value => console.log(value)}
  style={{ width: 400 }}
/>;

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 4,
  },
  card: {
    minWidth: 275,
  },
  title: {
    fontSize: 24,
  },
  subtitle: {
    marginBottom: 24,
  },
  price: {
    fontSize: 24,
  }
});

class OrderListPage extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }

  render() {
    const {classes} = this.props;

    return (
      <div>
        <Navigation/>

        <div className={classes.margin}>
          My Orders

          <Tabs tabBarExtraContent={operations}>
            <TabPane tab="All" key="1">
              <EditableTable/>
            </TabPane>
            <TabPane tab="Unpaid" key="2">
              <EditableTable/>
            </TabPane>
            <TabPane tab="Paid" key="3">
              <EditableTable/>
            </TabPane>
            <TabPane tab="Closed" key="4">
              <EditableTable/>
            </TabPane>
          </Tabs>
        </div>

      </div>
    );
  }
}


export default withStyles(styles)(OrderListPage);
