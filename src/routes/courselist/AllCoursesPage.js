import React from 'react';
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

class AllCoursesPage extends React.Component {

  constructor() {
    super();
    this.state = {offset: 0};
  }

  handleClick(offset) {
    this.setState({offset});
  }

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
              {/*分页*/}

            </TabPane>
            <TabPane tab="Computer Science" key="2">
              <div>
                <ClassesGrid title=" " tileData={tileData.courses}/>
              </div>

            </TabPane>
            <TabPane tab="Social Science" key="3">
              <div>
                <ClassesGrid title=" " tileData={tileData.courses}/>
              </div>

            </TabPane>
            <TabPane tab="Humanities and Arts" key="4">
              <div>
                <ClassesGrid title=" " tileData={tileData.courses}/>
              </div>

            </TabPane>
            <TabPane tab="Language Learning" key="5">
              <div>
                <ClassesGrid title=" " tileData={tileData.courses}/>
              </div>

            </TabPane>
            <TabPane tab="Economics" key="6">
              <div>
                <ClassesGrid title=" " tileData={tileData.courses}/>
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



