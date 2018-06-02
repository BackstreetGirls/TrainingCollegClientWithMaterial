/**
 * Created by hyx on 2018/5/2.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import GridList from 'material-ui/GridList';
import GridListTile from '@material-ui/core/GridListTile';
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
    // flexWrap: 'nowrap',
    width: '100%',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  card: {
    maxWidth: 250,
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
        <GridList className={classes.gridList} spacing={8} cols={5} style={{margin: '-10px 10px 0 10px'}}>
          {this.props.tileData.map(tile => (
            <div style={{height: 'auto', marginTop: 10, cursor: 'pointer'}} key={tile.key}>
              <Link to={"/detail&courseID=:" + tile.key}>
                <Card className={classes.card} style={{maxWidth: 250, height: 350}}>
                  <CardMedia
                    className={classes.media}
                    image={tile.img}
                    title={tile.title}
                  />
                  <CardContent>
                    <Typography noWrap gutterBottom variant="headline" component="h2">
                      {tile.title}
                    </Typography>
                    <Typography component="p" style={{height: 74}}>
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
