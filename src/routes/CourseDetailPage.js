/**
 * Created by hyx on 2018/5/6.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'dva/router';
import {withStyles} from 'material-ui/styles';
import Card, {CardContent, CardActions, CardMedia} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import {Rate} from 'antd';
import Navigation from '../components/Navigation';
import img from '../assets/Recommendation/recommendation.jpeg'
import tileData from '../utils/FixedData';
import IconButton from 'material-ui/IconButton';
import Share from '@material-ui/icons/Share';
import Favorite from '@material-ui/icons/Favorite';
import NoFavorite from '@material-ui/icons/FavoriteBorder';
import Dialog, {DialogTitle} from 'material-ui/Dialog';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import SendIcon from '@material-ui/icons/Launch';
import blue from '@material-ui/core/colors/blue';
import Avatar from '@material-ui/core/Avatar';
import Input from '@material-ui/core/Input';
import {message} from 'antd';
import Footer from '../components/Footer';


const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 4,
    marginLeft: theme.spacing.unit * 10,
    marginRight: theme.spacing.unit * 10,
  },
  card: {
    minWidth: 275,
  },
  lessonTitle: {
    fontSize: 28,
  },
  title: {
    fontSize: 24,
  },
  subtitle: {
    marginBottom: 22,
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
    marginBottom: 36,
    marginTop: 4,
  },
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  input: {
    margin: theme.spacing.unit,
  },
});

const emails = ['username@gmail.com', 'user02@gmail.com'];


class CourseDetailPage extends React.Component {

  state = {
    courseInfo: {},
    isFavorite: false,
    dialog: false
  };

  // React组件初始化时自动调用的方法
  UNSAFE_componentWillMount() {
    // this.props.match.params.key的值为':2'
    let key = this.props.match.params.key.toString().substring(1);
    this.setState({
      courseInfo: tileData.courses[key]
    });
  }

  share = () => {
    this.setState({dialog: true});
  };

  dialog_close = () => {
    this.setState({dialog: false});
  };

  changeFavorite = () => {
    if (!this.state.isFavorite) {
      message.success('Collect successfully');
    }
    else {
      message.success('Remove from collection successfully');
    }
    this.setState({isFavorite: !this.state.isFavorite});
    message.config({
      top: 10,
      duration: 2,
      maxCount: 3,
    });
  };

  handleListItemClick = () => {
    this.setState({dialog: false});
    message.config({
      top: 10,
      duration: 2,
      maxCount: 3,
    });
    message.success('Send share email successfully');
  };


  render() {
    const {classes, ...other} = this.props;

    return (
      <div style={{minWidth: 1000}}>
        <Navigation/>

        <div className={classes.margin}>
          {/*style={{border: '1px solid rgba(0, 0, 0, 0.12)'}}*/}
          <Card elevation={2}>
            <Grid container spacing={24} alignItems="flex-end">
              <Grid item sm={4} xs={4}>
                <CardMedia
                  className={classes.media}
                  image={this.state.courseInfo.img === undefined ? img : this.state.courseInfo.img}
                />
              </Grid>
              <Grid item sm={8} xs={8}>
                <Card className={classes.card} elevation={0} style={{height: 250}}>
                  <CardContent>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                      <Typography variant="title" className={classes.lessonTitle}>
                        {
                          this.state.courseInfo.title === undefined ? "No course name yet." : this.state.courseInfo.title
                        }
                      </Typography>

                      <div style={{marginTop: '-1%', display: this.state.isFavorite === true ? 'block' : 'none'}}>
                        <IconButton style={{color: 'red'}} onClick={(index) => {
                          this.changeFavorite(index)
                        }}><Favorite/></IconButton>
                      </div>

                      <div style={{marginTop: '-1%', display: this.state.isFavorite === false ? 'block' : 'none'}}>
                        <IconButton onClick={(index) => {
                          this.changeFavorite(index)
                        }}><NoFavorite/></IconButton>
                      </div>

                      <div style={{marginTop: '-1%', marginLeft: '-1%'}}>
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
                    <Link to="/placeorder">
                      <Button variant="raised" color="primary">
                        Join Now
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Card>

          <Card elevation={2} style={{marginTop: 20, paddingBottom: 20}}>
            <Grid container spacing={16} className={classes.content}>
              <Grid item sm={8} xs={8} style={{borderRight: '1px solid rgba(0, 0, 0, 0.12)', margin: '20px 0'}}>
                {/*style={{border: '1px solid rgba(0, 0, 0, 0.12)'}}*/}
                <Card className={classes.card} elevation={0} style={{margin: '-20px 0'}}>
                  <CardContent>
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

                    <Typography variant="headline" className={classes.title}>
                      Institution Introduction
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      {
                        this.state.courseInfo.provider_detail === undefined ? "No provider detailed information yet." : this.state.courseInfo.provider_detail
                      }
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item sm={4} xs={4}>
                <Card className={classes.card} elevation={0}>
                  <CardContent>
                    <Grid container spacing={16} style={{margin: '10px 0', marginTop: '-6px', fontSize: 18}}>
                      <Grid item xs={6}>
                        <span style={{color: '#000'}}>Registered/Total</span>
                      </Grid>
                      <Grid item xs={6}>
                        <span style={{wordWrap: 'break-word'}}>
                          {
                            this.state.courseInfo.registered_total === undefined ? "No such information yet." : this.state.courseInfo.registered_total
                          }
                        </span>
                      </Grid>
                    </Grid>

                    <Grid container spacing={16} style={{margin: '10px 0', fontSize: 18}}>
                      <Grid item xs={6}>
                        <span style={{color: '#000'}}>Start Date</span>
                      </Grid>
                      <Grid item xs={6}>
                        <span style={{wordWrap: 'break-word'}}>
                          {
                            this.state.courseInfo.start_date === undefined ? "No start date yet." : this.state.courseInfo.start_date
                          }
                        </span>
                      </Grid>
                    </Grid>

                    <Grid container spacing={16} style={{margin: '10px 0', fontSize: 18}}>
                      <Grid item xs={6}>
                        <span style={{color: '#000'}}>Class Amount</span>
                      </Grid>
                      <Grid item xs={6}>
                        <span style={{wordWrap: 'break-word'}}>
                          {
                            this.state.courseInfo.class_amount === undefined ? "No classes yet." : this.state.courseInfo.class_amount
                          }
                        </span>
                      </Grid>
                    </Grid>

                    <Grid container spacing={16} style={{margin: '10px 0', fontSize: 18}}>
                      <Grid item xs={6}>
                        <span style={{color: '#000'}}>Lessons/Week & Total Weeks</span>
                      </Grid>
                      <Grid item xs={6}>
                        <span style={{wordWrap: 'break-word'}}>
                          {
                            this.state.courseInfo.lessons_perWeek_totalWeeks === undefined ? "No such information yet." : this.state.courseInfo.lessons_perWeek_totalWeeks
                          }
                        </span>
                      </Grid>
                    </Grid>

                    <Grid container spacing={16} style={{margin: '10px 0', fontSize: 18}}>
                      <Grid item xs={6}>
                        <span style={{color: '#000'}}>Institution</span>
                      </Grid>
                      <Grid item xs={6}>
                        <span style={{wordWrap: 'break-word'}}>
                          {
                            this.state.courseInfo.provider === undefined ? "No provider yet." : this.state.courseInfo.provider
                          }
                        </span>
                      </Grid>
                    </Grid>

                    <Grid container spacing={16} style={{margin: '10px 0', fontSize: 18}}>
                      <Grid item xs={6}>
                        <span style={{color: '#000'}}>Location</span>
                      </Grid>
                      <Grid item xs={6}>
                        <span style={{wordWrap: 'break-word'}}>
                          {
                            this.state.courseInfo.provider_location === undefined ? "No provider location yet." : this.state.courseInfo.provider_location
                          }
                        </span>
                      </Grid>
                    </Grid>

                    <Grid container spacing={16} style={{margin: '10px 0', fontSize: 18}}>
                      <Grid item xs={6}>
                        <span style={{color: '#000'}}>Contact Email</span>
                      </Grid>
                      <Grid item xs={6}>
                        <span style={{wordWrap: 'break-word'}}>
                          {
                            this.state.courseInfo.provider_email === undefined ? "No provider email yet." : this.state.courseInfo.provider_email
                          }
                        </span>
                      </Grid>
                    </Grid>

                    {/*<Typography variant="headline" className={classes.smallTitle}>*/}
                      {/*Contact Email*/}
                    {/*</Typography>*/}
                    {/*<Typography className={classes.pos} color="textSecondary">*/}
                      {/*{*/}
                        {/*this.state.courseInfo.provider_email === undefined ? "No provider email yet." : this.state.courseInfo.provider_email*/}
                      {/*}*/}
                    {/*</Typography>*/}
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Card>

        </div>
        <Footer/>

        <Dialog open={this.state.dialog} onClose={this.dialog_close} aria-labelledby="simple-dialog-title" {...other}>
          <DialogTitle id="simple-dialog-title">Share</DialogTitle>
          <div>
            <List>
              {emails.map(email => (
                <ListItem button onClick={() => this.handleListItemClick(email)} key={email}>
                  <ListItemAvatar>
                    <Avatar className={classes.avatar}>
                      <PersonIcon/>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={email}/>
                </ListItem>
              ))}
              <ListItem>
                <ListItemAvatar>
                  <Avatar button onClick={() => this.handleListItemClick('addAccount')}>
                    <SendIcon/>
                  </Avatar>
                </ListItemAvatar>
                <Input
                  placeholder="example@xxx.com"
                  className={classes.input}
                  inputProps={{
                    'aria-label': 'Description',
                  }}
                />
              </ListItem>
            </List>
            <Button onClick={() => {
              this.dialog_close()
            }} color="primary" style={{marginBottom: '5%', marginLeft: '60%'}}>
              CANCEL
            </Button>
          </div>
        </Dialog>
      </div>
    )
  }
}

CourseDetailPage.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles, {withTheme: true})(CourseDetailPage);
