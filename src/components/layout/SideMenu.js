import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

const SideMenu = () => {
  const categories = ['Microsoft', 'Crypto', 'ChatGpt'];
  return (
    <Sider width={220}
      style={{ background: '#fff' }}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ height: '100%' }}
      >
        {categories.map((category) => {
          return (<Menu.Item key={category}><Link to={`/category/${category}`}>{category}</Link></Menu.Item>)
        })}
      </Menu>
    </Sider>
  );
};

export default SideMenu;