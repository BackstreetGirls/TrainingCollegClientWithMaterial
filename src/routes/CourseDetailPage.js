/**
 * Created by hyx on 2018/5/6.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Card, {CardContent, CardActions, CardMedia} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
// import Divider from 'material-ui/Divider';

import {Rate} from 'antd';
import Navigation from '../components/Navigation';
import img from '../assets/Recommendation/recommendation1.jpeg'


const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 4,
  },
  card: {
    minWidth: 275,
  },
  title: {
    fontSize: 24,
  },
  subtitle: {
    marginBottom: 24,
  },
  price: {
    fontSize: 24,
    marginBottom: 8,
  },
  media: {
    height: 250,
    paddingTop: '56.25%', // 16:9
  },
  content: {
    marginTop: theme.spacing.unit * 2,
  },
  pos: {
    fontSize: 18,
    marginBottom: 24,
    marginTop: 4,
  },
});


class CourseDetailPage extends React.Component {

  render() {
    const {classes} = this.props;

    return (
      <div style={{minWidth: 1000}}>
        <Navigation/>

        <div className={classes.margin}>
          <Card elevation={0} style={{border: '1px solid rgba(0, 0, 0, 0.12)'}}>
            <Grid container spacing={16} alignItems="flex-end">
              <Grid item sm={4} xs={4}>
                <CardMedia
                  className={classes.media}
                  image={img}
                />
              </Grid>
              <Grid item sm={8} xs={8}>
                <Card className={classes.card} elevation={0} style={{height: 250}}>
                  <CardContent>
                    <Typography variant="title" className={classes.title}>
                      Master Python
                    </Typography>
                    <Rate className={classes.subtitle} disabled allowHalf defaultValue={4.5}/>

                    <Typography component="title" className={classes.price}>
                      ¥ 129.00
                    </Typography>

                    <Typography color="textSecondary">
                      Registration deadline: 2018.7.18
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button variant="raised" color="primary">
                      Join In
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Card>

          {/*<Divider className={classes.content}/>*/}

          <Grid container spacing={16} className={classes.content}>
            <Grid item sm={8} xs={8}>
              <Card className={classes.card} elevation={0} style={{border: '1px solid rgba(0, 0, 0, 0.12)'}}>
                <CardContent>
                  <Typography variant="headline" className={classes.title}>
                    Registered/Total
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    2/500
                  </Typography>

                  <Typography variant="headline" className={classes.title}>
                    Start Date
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    2018.8.1
                  </Typography>

                  <Typography variant="headline" className={classes.title}>
                    Class Amount
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    5
                  </Typography>

                  <Typography variant="headline" className={classes.title}>
                    Lessons/Week & Total Weeks
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    6 & 12
                  </Typography>

                  <Typography variant="headline" className={classes.title}>
                    Course Introduction
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    This Specialization builds on the success of the Python for Everybody course and will introduce
                    fundamental programming concepts including data structures, networked application program
                    interfaces, and databases, using the Python programming language. In the Capstone Project, you’ll
                    use the technologies learned throughout the Specialization to design and create your own
                    applications for data retrieval, processing, and visualization.
                  </Typography>

                  <Typography variant="headline" className={classes.title}>
                    Teacher Introduction
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    Associate Professor: Charles Severance
                  </Typography>

                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={4} xs={4}>
              <Card className={classes.card} elevation={0} style={{border: '1px solid rgba(0, 0, 0, 0.12)'}}>
                <CardContent>
                  <Typography variant="headline" className={classes.title}>
                    Provider
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    The University of Michigan
                  </Typography>

                  <Typography variant="headline" className={classes.title}>
                    Location
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    xxx
                  </Typography>

                  <Typography variant="headline" className={classes.title}>
                    Contact Email
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    michigan123@gmail.com
                  </Typography>

                  <Typography variant="headline" className={classes.title}>
                    Introduction
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    The University of Michigan is recognized as a leader in higher education due to the outstanding
                    quality of its 19 schools and colleges, internationally recognized faculty, and departments with 250
                    degree programs.

                    The mission of the University of Michigan is to serve the people of Michigan and the world through
                    preeminence in creating, communicating, preserving and applying knowledge, art, and academic values,
                    and in developing leaders and citizens who will challenge the present and enrich the future.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>

      </div>
    )
  }
}

CourseDetailPage.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles, {withTheme: true})(CourseDetailPage);
