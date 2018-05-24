import React from 'react';
import tileData from "../../utils/FixedData";
import Navigation from '../../components/Navigation';
import ClassesGrid from '../../components/ClassesGrid';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import { Tabs, Pagination } from 'antd';

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

class AllCoursesPage extends React.Component {

  render() {

    const{classes} = this.props;

    return(
      <div className={classes.root}>
        <Navigation/>

        <div className={classes.margin}>
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="All" key="1">
              <div>
                <ClassesGrid title=" " tileData={tileData.courses}/>
              </div>
              <div className={classes.margin}>
                <Pagination simple defaultCurrent={1} total={200} pageSize={20} style={{marginLeft: '42%'}} />
              </div>
            </TabPane>
            <TabPane tab="Computer Science" key="2">
              <div>
                <ClassesGrid title=" " tileData={tileData.courses}/>
              </div>
              <div className={classes.margin}>
                <Pagination simple defaultCurrent={1} total={40} pageSize={20} style={{marginLeft: '42%'}} />
              </div>
            </TabPane>
            <TabPane tab="Social Science" key="3">
              <div>
                <ClassesGrid title=" " tileData={tileData.courses}/>
              </div>
              <div className={classes.margin}>
                <Pagination simple defaultCurrent={1} total={40} pageSize={20} style={{marginLeft: '42%'}} />
              </div>
            </TabPane>
            <TabPane tab="Humanities and Arts" key="4">
              <div>
                <ClassesGrid title=" " tileData={tileData.courses}/>
              </div>
              <div className={classes.margin}>
                <Pagination simple defaultCurrent={1} total={40} pageSize={20} style={{marginLeft: '42%'}} />
              </div>
            </TabPane>
            <TabPane tab="Language Learning" key="5">
              <div>
                <ClassesGrid title=" " tileData={tileData.courses}/>
              </div>
              <div className={classes.margin}>
                <Pagination simple defaultCurrent={1} total={40} pageSize={20} style={{marginLeft: '42%'}} />
              </div>
            </TabPane>
            <TabPane tab="Economics" key="6">
              <div>
                <ClassesGrid title=" " tileData={tileData.courses}/>
              </div>
              <div className={classes.margin}>
                <Pagination simple defaultCurrent={1} total={40} pageSize={20} style={{marginLeft: '42%'}} />
              </div>
            </TabPane>
          </Tabs>
        </div>

      </div>
    )

  }

}

AllCoursesPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AllCoursesPage);



