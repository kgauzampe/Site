import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl'
import Main from './Components/main';
import {Link} from 'react-router-dom';

function App() {
  return (
   <div className="nav-bar">
     <Layout>
       <Header className="header-color" title="Mpumelelo Mpe" scroll>
         <Navigation>
           <Link to="/">Home</Link>
           <Link to="/about">About Me</Link>
           <Link to="/skills">Skills</Link>
           <Link to="/contact">Contact Me</Link>            
         </Navigation>  
       </Header>
       <Drawer title="Mpumelelo Mpe">
       <Navigation>
           <Link to="/">Home</Link>
           <Link to="/about">About Me</Link>
           <Link to="/skills">Skills</Link>
           <Link to="/contact">Contact Me</Link>
         </Navigation>
       </Drawer>
       <Content>
         <div className="page-content" />
         <Main/>
       </Content>
     </Layout>

   </div>
  );
}

export default App;
