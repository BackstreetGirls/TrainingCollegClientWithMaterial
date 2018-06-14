/**
 * Created by hyx on 2018/6/15.
 */
import React from 'react';
import {Layout} from 'antd';

const {Footer} = Layout;

class MyFooter extends React.Component {
  render() {
    return (
      <div>
        <Footer style={{backgroundColor: 'black', color: 'white'}}>
          Copyright © 2018 Backstreet Girls. All rights reserved.
        </Footer>
      </div>
    )
  }
}

export default MyFooter;
