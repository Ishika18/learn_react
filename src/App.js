import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className='demo-big-content'>
      <Layout fixedHeader>
        <Header title={<span><span style={{ color: '/ddd' }}></span><strong>Title</strong></span>}>
          <Navigation>
            <Link to="/aboutme">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
          </Navigation>
        </Header>
        <Drawer title="Title">
          <Navigation>
            <Link to="/aboutme">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className='page-content' />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
