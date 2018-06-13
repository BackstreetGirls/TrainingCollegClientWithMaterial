import React from 'react';
import tileData from "../../utils/FixedData";
import Navigation from '../../components/Navigation';
import ClassesGridAll from '../../components/ClassesGridAll';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import { Menu, Layout } from 'antd';

const MenuItemGroup = Menu.ItemGroup;
const { Content, Sider } = Layout;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing.unit * 4,
  },
});

class AllCoursesPage extends React.Component {

  handleClick = (e) => {
    console.log('click ', e);
  }

  render() {

    const{classes} = this.props;

    return(
      <div className={classes.root}>
        <Navigation/>

        <div className={classes.margin}>
          <Layout>
            <Sider style={{ overflow: 'auto' }}>
              <Menu
                onClick={this.handleClick}
                style={{ width: 200 }}
                defaultOpenKeys={['sub1']}
                mode="inline"
              >
                <MenuItemGroup key="g1" title="Availability">
                  <Menu.Item key="1">Current</Menu.Item>
                  <Menu.Item key="2">Starting Soon</Menu.Item>
                  <Menu.Item key="3">Upcoming</Menu.Item>
                  <Menu.Item key="4">Self-Paced</Menu.Item>
                  <Menu.Item key="5">Archived</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup key="g2" title="Subjects">
                  <Menu.Item key="6">Architecture</Menu.Item>
                  <Menu.Item key="7">Art & Culture</Menu.Item>
                  <Menu.Item key="8">Chemistry</Menu.Item>
                  <Menu.Item key="9">Computer Science</Menu.Item>
                  <Menu.Item key="10">Design</Menu.Item>
                  <Menu.Item key="11">Ecomomics & Finance</Menu.Item>
                  <Menu.Item key="12">Engineering</Menu.Item>
                  <Menu.Item key="13">History</Menu.Item>
                  <Menu.Item key="14">Language</Menu.Item>
                  <Menu.Item key="15">Law</Menu.Item>
                  <Menu.Item key="16">Math</Menu.Item>
                  <Menu.Item key="17">Music</Menu.Item>
                  <Menu.Item key="18">Social Science</Menu.Item>
                </MenuItemGroup>
              </Menu>
            </Sider>
              <Content>
                <ClassesGridAll title=" " tileData={tileData.courses}/>
              </Content>
          </Layout>
        </div>

      </div>
    )

  }

}

AllCoursesPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AllCoursesPage);



