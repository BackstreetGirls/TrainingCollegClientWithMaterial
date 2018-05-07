/**
 * Created by CLL on 18/4/28.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  ExpansionPanelActions,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

const styles = theme => ({
  root: {
    marginLeft:'-6%',
    width: '85%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '25%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

class OrderSuccessPage extends React.Component{
  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <ExpansionPanel defaultExpanded>
          <ExpansionPanelSummary>
            <div className={classes.column}>
              <Typography className={classes.heading}>订单号</Typography>
            </div>
            <div className={classes.column}>
              <Typography className={classes.heading}>课程信息</Typography>
            </div>
            <div className={classes.column}>
              <Typography className={classes.heading}>预定人信息</Typography>
            </div>

          </ExpansionPanelSummary>
          <Divider />
          <ExpansionPanelDetails className={classes.details}>
            <div className={classes.column}>
              000001
            </div>
            <div className={classes.column}>
              TensorFlow文本分类<br/>
              2018/5/1-2018/7/1
            </div>
            <div className={classes.column}>
              陈俐俐<br/>
              12345678912
            </div>
            <div className={classNames(classes.column, classes.helper)}>
              <Typography variant="caption">
                小计 : 299*2<br />
                状态 : 已支付
              </Typography>
            </div>
          </ExpansionPanelDetails>

        </ExpansionPanel>
      </div>
    );
  }

}

OrderSuccessPage.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(OrderSuccessPage);
