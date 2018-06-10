/**
 * Created by hyx on 2018/6/10.
 */
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import OrderIcon from '@material-ui/icons/ViewList';
import PasswordIcon from '@material-ui/icons/Lock';
import StarIcon from '@material-ui/icons/Star';
import {Link} from 'dva/router';

export const mainListItems = (
  <div>
    <Link to="/traineecenter">
      <ListItem button>
        <ListItemIcon>
          <PersonIcon/>
        </ListItemIcon>
        <ListItemText primary="Personal Center"/>
      </ListItem>
    </Link>
    <Link to="/myorder">
      <ListItem button>
        <ListItemIcon>
          <OrderIcon/>
        </ListItemIcon>
        <ListItemText primary="My Order"/>
      </ListItem>
    </Link>
    <Link to="/myfavorite">
      <ListItem button>
        <ListItemIcon>
          <StarIcon/>
        </ListItemIcon>
        <ListItemText primary="My Favorite"/>
      </ListItem>
    </Link>
  </div>
);

export const otherListItems = (
  <div>
    <Link to="/changepassword">
      <ListItem button>
        <ListItemIcon>
          <PasswordIcon/>
        </ListItemIcon>
        <ListItemText primary="Modify Password"/>
      </ListItem>
    </Link>
  </div>
);
