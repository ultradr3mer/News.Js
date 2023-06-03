import React, { Fragment } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import NewsGrid from './NewsGrid';
import { Content } from 'antd/es/layout/layout';

const { Sider } = Layout;

const NewsPage = () => {
  const categories = ['Microsoft', 'Crypto', 'ChatGpt'];
  return (
    <Fragment>
      <Sider width={220}
        style={{ background: '#fff' }} >
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{ height: '100%' }}>
          {categories.map((category) => {
            return (<Menu.Item key={category}><Link to={`/category/${category}`}>{category}</Link></Menu.Item>)
          })}
        </Menu>
      </Sider>
      <Content style={{ padding: '0 24px', minHeight: 280 }}>
        <NewsGrid />
      </Content>
    </Fragment>
  );
};

export default NewsPage;