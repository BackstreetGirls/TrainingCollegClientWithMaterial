import Navigation from '../../components/Navigation'
import OrderTable from '../../routes/myorder/OrderTable'
import UnpaidTable from '../../routes/myorder/UnpaidTable'
import PaidTable from '../../routes/myorder/PaidTable'
import ClosedTable from '../../routes/myorder/ClosedTable'

import React from 'react';
import { Tabs, Input } from 'antd';
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
    marginLeft: theme.spacing.unit * 12,
    marginRight: theme.spacing.unit * 12,
    marginTop: theme.spacing.unit * 4
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
              <OrderTable/>
            </TabPane>
            <TabPane tab="Unpaid" key="2">
              <UnpaidTable/>
            </TabPane>
            <TabPane tab="Paid" key="3">
              <PaidTable/>
            </TabPane>
            <TabPane tab="Closed" key="4">
              <ClosedTable/>
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}


export default withStyles(styles)(OrderListPage);
