import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import AppHeader from './components/layout/AppHeader';
import SideMenu from './components/layout/SideMenu';
import NewsGrid from './components/layout/NewsGrid';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Layout } from 'antd';
const { Content } = Layout;

class App extends Component {
  render() {
    return (
      <Layout>
        <Router>
          <Fragment>
            <AppHeader />
            <Content style={{ padding: '0 20px' }}>
              <Layout style={{ padding: '24px 0', background: '#fff' }}>
                <SideMenu />
                <Content style={{ padding: '0 24px', minHeight: 280 }}>
                  <NewsGrid />
                </Content>
              </Layout>
            </Content>
          </Fragment>
        </Router>
      </Layout>
    );
  }
}

export default App;
