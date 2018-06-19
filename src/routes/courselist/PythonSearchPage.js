/**
 * python搜索结果页面
 * 修改日期：2018/6/13
 */
import React from 'react'
import tileData from "../../utils/FixedData";
import Navigation from '../../components/Navigation';
import ClassesGrid from '../../components/ClassesGrid';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing.unit * 4,
  },
});

class PythonSearchPage extends React.Component {

  render() {

    const{classes} = this.props;

    return(
      <div className={classes.root}>
        <Navigation/>

        <div className={classes.margin}>
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Synthetically(Sorting)" key="1">
              <div>
                <ClassesGrid title="Viewing 3 results related to 'python'" tileData={tileData.python_search1}/>
              </div>

            </TabPane>
            <TabPane tab="Comment-Based" key="2">
              <div>
                <ClassesGrid title="Viewing 3 results related to 'python'" tileData={tileData.python_search2}/>
              </div>

            </TabPane>
            <TabPane tab="Newest" key="3">
              <div>
                <ClassesGrid title="Viewing 3 results related to 'python'" tileData={tileData.python_search3}/>
              </div>

            </TabPane>
          </Tabs>
        </div>
      </div>
    )

  }

}

PythonSearchPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PythonSearchPage);
