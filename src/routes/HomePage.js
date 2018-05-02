/**
 * Created by hyx on 2018/4/27.
 */
import React from 'react';
import { Carousel } from 'antd';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Navigation from '../components/Navigation';
import ClassesGrid from '../components/ClassesGrid';
import tileData from '../utils/FixedData';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing.unit * 4,
  },
});

class HomePage extends React.Component {

  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Navigation/>

        <Carousel autoplay>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>

        <div className={classes.margin}>
          <ClassesGrid title="Recommendation" tileData={tileData.recommendedClasses}/>
        </div>

        <div className={classes.margin}>
          <ClassesGrid title="Newest" tileData={tileData.recommendedClasses}/>
        </div>

      </div>
    )
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);
