/**
 * Created by hyx on 2018/5/6.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Card, {CardContent, CardActions} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

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
  }
});


class CourseDetailPage extends React.Component {

  render() {
    const {classes} = this.props;

    return (
      <div>
        <Navigation/>

        <div className={classes.margin}>
          <Grid container spacing={0} alignItems="flex-end">
            <Grid item sm={4}>
              <img src={img} style={{height: 250}}/>
            </Grid>
            <Grid item sm={8}>
              <Card className={classes.card} elevation={0} style={{height: 250}}>
                <CardContent>
                  <Typography variant="title" className={classes.title}>
                    Play with Node.js
                  </Typography>
                  <Rate className={classes.subtitle} disabled allowHalf defaultValue={4.5}/>

                  <Typography component="title" className={classes.price}>
                    ¥ 129.00
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
        </div>

      </div>
    )
  }
}

CourseDetailPage.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles, {withTheme: true})(CourseDetailPage);
