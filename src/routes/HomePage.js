import React from 'react';
import { Carousel } from 'antd';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Navigation from '../components/Navigation';


const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class HomePage extends React.Component {

  state = {
    open_drawer: false,
  };

  toggleDrawer = (state) => () => {
    this.setState({
      open_drawer: state,
    });
  };

  render() {

    const { classes } = this.props;

    return (
      <div>
        <Navigation/>

        <Carousel autoplay>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>

      </div>
    )
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);
