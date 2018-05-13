/**
 * Created by hyx on 2018/4/27.
 */
import React from 'react';
import {Carousel} from 'antd';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Button from 'material-ui/Button';

import Navigation from '../components/Navigation';
import ClassesGrid from '../components/ClassesGrid';
import tileData from '../utils/FixedData';

import carousal1 from '../assets/Carousel/carousal1.jpg';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing.unit * 4,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class HomePage extends React.Component {

  render() {

    const {classes} = this.props;

    return (
      <div className={classes.root}>
        <Navigation/>

        <Carousel autoplay>
          <div>
            <img src={carousal1}/>
            <Button variant="raised" color="primary" className={classes.button} style={{marginTop: -1500}}>
              Learn more
            </Button>
          </div>
          <div>
            <img src={carousal1}/>
          </div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>

        <div className={classes.margin}>
          <ClassesGrid title="Recommendation" tileData={tileData.courses}/>
        </div>

        <div className={classes.margin}>
          <ClassesGrid title="Newest" tileData={tileData.courses}/>
        </div>

      </div>
    )
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);
