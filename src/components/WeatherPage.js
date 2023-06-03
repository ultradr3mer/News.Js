import React, { Fragment } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { Content } from 'antd/es/layout/layout';
import WeatherCurrent from './WeatherCurrent';

const { Sider } = Layout;

const WeatherPage = () => {
  const locations = [{name: 'Hildesheim', country: 'DE', lat: '52.1600', lon: '9.9428'}, 
  {name: 'Viersen', country: 'DE', lat: '51.2556', lon: '6.3950'}, 
  {name: 'Munich', country: 'DE', lat: '48.1388', lon: '11.5713'}];
  return (
    <Fragment>
      <Sider width={220}
        style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{ height: '100%' }}>
          {locations.map((item) => {
            return (<Menu.Item key={item.name}><Link to={`/weather?city=${item.name}&country=${item.country}`}>{item.name}</Link></Menu.Item>)
          })}
        </Menu>
      </Sider>
      <Content style={{ padding: '0 24px', minHeight: 280 }}>
        <WeatherCurrent/>
      </Content>
    </Fragment>
  );
};

export default WeatherPage;