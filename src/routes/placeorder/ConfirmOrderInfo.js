/**
 * Created by CLL on 18/4/27.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Input, {InputLabel} from 'material-ui/Input';
import {FormControl} from 'material-ui/Form';
import TextField from 'material-ui/TextField';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

import courseImage from '../../assets/文本分类课程.png'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection:'row',
    marginLeft:'5%'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  container: {
    display: 'flex',
    flexDirection:'column',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  number:{
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 50,
  },
  menu: {
    width: 200,
  },
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '60%', // 16:9
  },
  total:{
    paddingTop: '10%',
    marginLeft: '40%',
    align:'flex-end',
    color:"#303AA5",
    fontSize:16
  }
});

class ConfirmOrderInfo extends React.Component {
  state = {

  };

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  };

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={courseImage}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="headline">
              TensorFlow文本分类
            </Typography>
            <Typography component="p">
              时间：2018/5/1-2018/7/1
            </Typography>
            <Typography component="p">
              单价：299元
            </Typography>
          </CardContent>
        </Card>
        <form className={classes.root} autoComplete="off">
          <FormControl className={classes.formControl}>
            <TextField
              required
              InputLabelProps={{
                shrink: true,
              }}
              id="name"
              label="学员真实姓名"
              placeholder="陈俐俐"
              className={classes.textField}
              margin="normal"
            />

            <TextField
              required
              InputLabelProps={{
                shrink: true,
              }}
              id="phone"
              label="联系方式"
              placeholder="12345678912"
              className={classes.textField}
              margin="normal"
            />

            <TextField
              required
              InputLabelProps={{
                shrink: true,
              }}
              id="num"
              label="学员数量"
              type="number"
              placeholder="1"
              className={classes.textField}
              margin="normal"
            />

            <Typography className={classes.total}>
              应付金额 : 299元
            </Typography>


          </FormControl>
        </form>
      </div>
    );
  }
}

ConfirmOrderInfo.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(ConfirmOrderInfo);
