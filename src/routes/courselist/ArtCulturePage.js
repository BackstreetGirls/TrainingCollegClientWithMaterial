import React from 'react';
import tileData from "../../utils/FixedData";
import Navigation from '../../components/Navigation';
import ClassesGridAll from '../../components/ClassesGridAll';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import { Menu, Layout } from 'antd';
import {Link} from 'dva/router';
import Footer from '../../components/Footer';


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

class ArtCulturePage extends React.Component {

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
                defaultSelectedKeys={['8']}
                mode="inline"
              >
                <MenuItemGroup key="g1" title="Courses">
                  <Menu.Item key="1">
                    <Link to="/allcourses">All</Link>
                  </Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup key="g2" title="Availability">
                  <Menu.Item key="2">
                    <Link to="/currentcourses">Current</Link>
                  </Menu.Item>
                  <Menu.Item key="3">Starting Soon</Menu.Item>
                  <Menu.Item key="4">Upcoming</Menu.Item>
                  <Menu.Item key="5">Self-Paced</Menu.Item>
                  <Menu.Item key="6">Archived</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup key="g3" title="Subjects">
                  <Menu.Item key="7">Architecture</Menu.Item>
                  <Menu.Item key="8">Art & Culture</Menu.Item>
                  <Menu.Item key="9">Chemistry</Menu.Item>
                  <Menu.Item key="10">Computer Science</Menu.Item>
                  <Menu.Item key="11">Design</Menu.Item>
                  <Menu.Item key="12">Ecomomics & Finance</Menu.Item>
                  <Menu.Item key="13">Engineering</Menu.Item>
                  <Menu.Item key="14">History</Menu.Item>
                  <Menu.Item key="15">Language</Menu.Item>
                  <Menu.Item key="16">Law</Menu.Item>
                  <Menu.Item key="17">Math</Menu.Item>
                  <Menu.Item key="18">Music</Menu.Item>
                  <Menu.Item key="19">Social Science</Menu.Item>
                </MenuItemGroup>
              </Menu>
            </Sider>
            <Content style={{backgroundColor: 'white'}}>
              <ClassesGridAll title=" " tileData={tileData.art_and_culture}/>
            </Content>
          </Layout>
        </div>
        <Footer/>
      </div>
    )

  }

}

ArtCulturePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ArtCulturePage);
