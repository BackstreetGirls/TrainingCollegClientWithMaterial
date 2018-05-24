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
import tileData from '../utils/FixedData';
import IconButton from 'material-ui/IconButton';
import Share from '@material-ui/icons/Share';
import Favorite from '@material-ui/icons/Favorite';
import NoFavorite from '@material-ui/icons/FavoriteBorder';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Paper from 'material-ui/Paper';


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

  state = {
    courseInfo: {},
    isFavorite: true,
    dialog:false
  };

  // React组件初始化时自动调用的方法
  componentWillMount() {
    // this.props.match.params.key的值为':2'
    let key = this.props.match.params.key.toString().substring(1);
    this.setState({
      courseInfo: tileData.courses[key]
    });
  }

  share=()=>{
    this.setState({dialog:true});
  };

  dialog_close=()=> {
    this.setState({dialog: false});
  };

  changeFavorite=()=>{
    this.setState({isFavorite:!this.isFavorite});
  };

  render() {
    const {classes} = this.props;

    return (
      <div style={{minWidth: 1000}}>
        <Navigation/>

        <div className={classes.margin}>
          <Card elevation={0} style={{border: '1px solid rgba(0, 0, 0, 0.12)'}}>
            <Grid container spacing={24} alignItems="flex-end">
              <Grid item sm={4} xs={4}>
                <CardMedia
                  className={classes.media}
                  image={img}
                />
              </Grid>
              <Grid item sm={8} xs={8}>
                <Card className={classes.card} elevation={0} style={{height: 250}}>
                  <CardContent>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                      <Typography variant="title" className={classes.title}>
                        {
                          this.state.courseInfo.title === undefined ? "No course name yet." : this.state.courseInfo.title
                        }
                      </Typography>

                      <div style={{marginTop:'-1%',display:this.state.isFavorite===true?'block':'none'}}>
                        <IconButton onClick={(index)=>{this.changeFavorite(index)}}><Favorite/></IconButton>
                      </div>

                      <div style={{marginTop:'-1%',display:this.state.isFavorite===false?'block':'none'}}>
                        <IconButton onClick={(index)=>{this.changeFavorite(index)}}><NoFavorite/></IconButton>
                      </div>

                      <div style={{marginTop:'-1%',marginLeft:'-1%'}}>
                        <IconButton onClick={this.share}><Share/></IconButton>
                      </div>
                    </div>
                    <Rate className={classes.subtitle} disabled allowHalf
                          defaultValue={
                            this.state.courseInfo.rate === undefined ? 0 : this.state.courseInfo.rate
                          }/>

                    <Typography component="title" className={classes.price}>
                      {
                        this.state.courseInfo.price === undefined ? "No price yet." : this.state.courseInfo.price
                      }
                    </Typography>

                    <Typography color="textSecondary">
                      Registration deadline: {
                      this.state.courseInfo.deadline === undefined ? "No registration deadline yet." : this.state.courseInfo.deadline
                    }
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button variant="raised" color="primary">
                      Join Now
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
                    {
                      this.state.courseInfo.registered_total === undefined ? "No such information yet." : this.state.courseInfo.registered_total
                    }
                  </Typography>

                  <Typography variant="headline" className={classes.title}>
                    Start Date
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    {
                      this.state.courseInfo.start_date === undefined ? "No start date yet." : this.state.courseInfo.start_date
                    }
                  </Typography>

                  <Typography variant="headline" className={classes.title}>
                    Class Amount
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    {
                      this.state.courseInfo.class_amount === undefined ? "No classes yet." : this.state.courseInfo.class_amount
                    }
                  </Typography>

                  <Typography variant="headline" className={classes.title}>
                    Lessons/Week & Total Weeks
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    {
                      this.state.courseInfo.lessons_perWeek_totalWeeks === undefined ? "No such information yet." : this.state.courseInfo.lessons_perWeek_totalWeeks
                    }
                  </Typography>

                  <Typography variant="headline" className={classes.title}>
                    Course Introduction
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    {
                      this.state.courseInfo.course_detail === undefined ? "No detailed introduction yet." : this.state.courseInfo.course_detail
                    }
                  </Typography>

                  <Typography variant="headline" className={classes.title}>
                    Teacher Introduction
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    {
                      this.state.courseInfo.teacher === undefined ? "No teacher yet." : this.state.courseInfo.teacher
                    }
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
                    {
                      this.state.courseInfo.provider === undefined ? "No provider yet." : this.state.courseInfo.provider
                    }
                  </Typography>

                  <Typography variant="headline" className={classes.title}>
                    Location
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    {
                      this.state.courseInfo.provider_location === undefined ? "No provider location yet." : this.state.courseInfo.provider_location
                    }
                  </Typography>

                  <Typography variant="headline" className={classes.title}>
                    Contact Email
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    {
                      this.state.courseInfo.provider_email === undefined ? "No provider email yet." : this.state.courseInfo.provider_email
                    }
                  </Typography>

                  <Typography variant="headline" className={classes.title}>
                    Introduction
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    {
                      this.state.courseInfo.provider_detail === undefined ? "No provider detailed information yet." : this.state.courseInfo.provider_detail
                    }
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>

        <Dialog
          open={this.state.dialog}
          onClose={(index)=>{this.dialog_close(index)}}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title3">Share</DialogTitle>
          <DialogContent>
            <DialogContentText style={{width:320}}>
              Please input the email to share our course.
            </DialogContentText>
              <div style={{marginLeft:"21%"}}>
                <TextField
                  autoFocus
                  required
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal"
                  id="name"
                  label="email"
                  placeholder="example@xxx.com"
                  type="email"
                />
              </div>

          </DialogContent>
          <DialogActions>
            <Button onClick={(index)=>{this.dialog_close(index)}} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>

      </div>
    )
  }
}

CourseDetailPage.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles, {withTheme: true})(CourseDetailPage);
