import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Navigation from '../components/Navigation';
import tileData from "../../utils/FixedData";
import ClassesGrid from '../components/ClassesGrid';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing.unit * 4,
  },
});

class AllCourses extends React.Component {

  render() {

    const{classes} = this.props;

    return(
      <div className={classes.root}>
        <Navigation/>

        <div>
          <FlatButton label="Humanities and Arts" primary={true} />
          <FlatButton label="Computer Science" primary={true} />
          <FlatButton label="Social Science" primary={true} />
          <FlatButton label="Language Learning" primary={true} />
          <FlatButton label="Life Science" primary={true} />
          <FlatButton label="Economics" primary={true} />
        </div>

        <div className={classes.margin}>
          <ClassesGrid title="All" tileData={tileData.recommendedClasses}/>
        </div>
      </div>
    )

  }

}

AllCourses.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AllCourses);



