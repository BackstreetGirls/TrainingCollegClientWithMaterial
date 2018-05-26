import React from 'react'
import tileData from "../../utils/FixedData";
import Navigation from '../../components/Navigation';
import ClassesGrid from '../../components/ClassesGrid';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import { Tabs, Icon } from 'antd';

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

class MyFavoritePage extends React.Component {

  render() {

    const{classes} = this.props;

    return(
      <div className={classes.root}>
        <Navigation/>

        <div className={classes.margin}>
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab={<span><Icon type="heart" />Favorites</span>} key="1">
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

MyFavoritePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyFavoritePage);
