import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header className="header"
    style={{
      position: 'sticky',
      top: 0,
      zIndex: 1,
      width: '100%',
      display: 'flex',
    }}>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['home']}
        style={{lineHeight: '64px'}}>
        <Menu.Item key="news"><Link to="/news">News</Link></Menu.Item>
        <Menu.Item key="weather"><Link to="/weather">Weather</Link></Menu.Item>
      </Menu>
    </Header>
  );
};

export default AppHeader;