/**
 * Created by hyx on 2018/4/27.
 */
import React from 'react';
import {connect} from 'dva';
import {Carousel} from 'antd';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Button from 'material-ui/Button';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ClassesGrid from '../components/ClassesGrid';
import tileData from '../utils/FixedData';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import carousal1 from '../assets/Carousel/carousal1.jpg';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing.unit * 4,
    marginLeft: theme.spacing.unit * 6,
    marginRight: theme.spacing.unit * 6,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class HomePage extends React.Component {
  state = {
    open: true,
  };

  handleClose = () => {
    this.setState({open: false});
    this.props.dispatch({
      type: 'trainee/changeLocationHintTag',
      payload: {location_hint_tag: 1},
    })
  };

  render() {

    const {classes} = this.props;

    return (
      <div className={classes.root}>
        <Navigation/>

        <Carousel autoplay>
          <div>
            <img alt="load false" src={carousal1}/>
            <Button variant="raised" color="primary" className={classes.button} style={{marginTop: -1500}}>
              Learn more
            </Button>
          </div>
          <div>
            <img alt="load false" src={carousal1}/>
          </div>
          <div><img alt="load false" src={carousal1}/></div>
          <div><img alt="load false" src={carousal1}/></div>
        </Carousel>

        <div className={classes.margin}>
          <ClassesGrid title="Recommendation" tileData={tileData.recommendation}/>
        </div>

        <div className={classes.margin}>
          <ClassesGrid title="Newest" tileData={tileData.newest}/>
        </div>

        {
          this.props.trainee.location_hint_tag === 0
            ?
            <Dialog
              open={this.state.open}
              onClose={this.handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"Switch location"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  The system has detected that you are now in Gulou District,
                  <br/>
                  so can we help you to switch to this area?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  No
                </Button>
                <Button onClick={this.handleClose} color="primary" autoFocus>
                  Yes
                </Button>
              </DialogActions>
            </Dialog>
            :
            null
        }
        <Footer/>
      </div>
    )
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps({trainee}) {
  return {
    trainee,
  };
}

export default connect(mapStateToProps)(withStyles(styles)(HomePage));
