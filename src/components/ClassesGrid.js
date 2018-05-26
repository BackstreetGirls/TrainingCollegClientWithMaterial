/**
 * Created by hyx on 2018/5/2.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import GridList from 'material-ui/GridList';
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import {Rate} from 'antd';
import {Link} from 'dva/router';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    fontSize: '32px',
    fontWeight: 400,
    width: '100%',
    float: 'left',
    margin: '15px 22px',
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  rate: {
    margin: '0 10px',
  }
});


class ClassesGrid extends React.Component {

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.root}>
        <p className={classes.title}>
          {this.props.title ? this.props.title : "Default"}
        </p>
        <GridList className={classes.gridList} cols={2.5} style={{margin: '0 10px'}}>
          {this.props.tileData.map(tile => (
            <div style={{height: '320', margin: '0 10px', cursor: 'pointer'}} key={tile.key}>
              <Link to={"/detail&courseID=:" + tile.key}>
                <Card className={classes.card} style={{width: 250, height: 400}}>
                  <CardMedia
                    className={classes.media}
                    image={tile.img}
                    title={tile.title}
                  />
                  <CardContent>
                    <Typography noWrap gutterBottom variant="headline" component="h2">
                      {tile.title}
                    </Typography>
                    <Typography component="p">
                      {tile.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Rate className={classes.rate} disabled allowHalf defaultValue={tile.rate}/>
                  </CardActions>
                </Card>
              </Link>
            </div>
          ))}
        </GridList>
      </div>
    )
  }
}

ClassesGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClassesGrid);
