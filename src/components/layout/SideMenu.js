import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const {Sider} = Layout;

const SideMenu = () => {
  return (
    <Sider width={220}
      style={{ background: '#fff' }}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ height: '100%' }}
      >
        <Menu.Item key="home"><Link to="/">Home</Link></Menu.Item>
        <Menu.Item key="about"><Link to="/about/">About</Link></Menu.Item>
        <Menu.Item key="contact"><Link to="/contact/">Contact</Link></Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideMenu;