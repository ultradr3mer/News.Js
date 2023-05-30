import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import AppHeader from './components/layout/AppHeader';
import SideMenu from './components/layout/SideMenu';
import NewsGrid from './components/layout/NewsGrid';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from 'antd';
const { Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <AppHeader />
          <Content style={{ padding: '0 20px' }}>
            <Layout style={{ padding: '24px 0', background: '#fff' }}>
              <SideMenu />
              <Content style={{ padding: '0 24px', minHeight: 280 }}>
                <Routes>
                  <Route path="/category/:id" element={<NewsGrid />} />
                </Routes>
              </Content>
            </Layout>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            React-Bing-News | ReactJS interfase using Ant Design for Bing News
          </Footer>
        </Fragment>
      </Router>
    );
  }
}

export default App;
