import React, { Fragment } from 'react';
import './App.css';
import AppHeader from './components/layout/AppHeader';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from 'antd';
import NewsPage from './components/NewsPage';
import WeatherPage from './components/WeatherPage';
import WeatherMap from './components/WeatherMap';
const { Content, Footer } = Layout;

const App = () => {
  return (
    <Layout>
      <Router>
        <Fragment>
          <AppHeader />
          <Content style={{ padding: '0 20px' }}>
            <Layout style={{ padding: '24px 0', background: '#fff' }}>
              <Routes>
                <Route path="/" element={<NewsPage />} />
                <Route path="/category/:id" element={<NewsPage />} />
                <Route path="/weather" element={<WeatherPage />} />
                <Route path="/weathermap" element={<WeatherMap />} />
              </Routes>
            </Layout>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            React-Bing-News | ReactJS interfase using Ant Design for Bing News
          </Footer>
        </Fragment>
      </Router>
    </Layout>
  );
}

export default App;
