import React from 'react'
import tileData from "../../utils/FixedData";
import Navigation from '../../components/Navigation';
import ClassesGrid from '../../components/ClassesGrid';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import { Tabs, Icon } from 'antd';
import Footer from '../../components/Footer';


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
                <ClassesGrid title=" " tileData={tileData.favorite}/>
              </div>
            </TabPane>
          </Tabs>
        </div>
        {
          // 如果页面没有滚动条，则固定Footer到底部
          document.documentElement.clientHeight >= document.documentElement.offsetHeight - 4
            ?
            <div style={{position: 'fixed', bottom: 0, height: 'auto', width: '100%'}}>
              <Footer/>
            </div>
            :
            <Footer/>
        }
      </div>
    )

  }

}

MyFavoritePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyFavoritePage);
