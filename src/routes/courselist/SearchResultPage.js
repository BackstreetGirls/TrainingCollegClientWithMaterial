import React from 'react'
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

class SearchResultPage extends React.Component {

  render() {

    const{classes} = this.props;

    return(
      <div className={classes.root}>
        <Navigation/>

        <div className={classes.margin}>
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Synthetically(Sorting)" key="1">
              <div>
                <ClassesGrid title=" " tileData={tileData.search_result1}/>
              </div>

            </TabPane>
            <TabPane tab="Comment-Based" key="2">
              <div>
                <ClassesGrid title=" " tileData={tileData.search_result2}/>
              </div>

            </TabPane>
            <TabPane tab="Newest" key="3">
              <div>
                <ClassesGrid title=" " tileData={tileData.search_result3}/>
              </div>

            </TabPane>
          </Tabs>
        </div>
      </div>
    )

  }

}

SearchResultPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchResultPage);
