import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';


class LandingPage extends Component {
  render() {
    return(
<div style={{width: '100%', margin: 'auto'}}>
   <Grid className="landing-grid">
     <Cell col={12}>
       <img
       src="./img/kgaugelo.png"
       alt="landingimg"
       className="landing-img"
       />
      <div className="banner-text">
        <h1>Junior Web developer</h1>
        <hr/>
        <p>React | Javascript | NodeJS | Express | HTML/CSS |Jasmine | PLSQL| SQL | Docker </p>
        <div className="social-links">
        
           {/* Github */}
           <a href= "https://github.com/kgauzampe" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square"  aria-hidden="true"/>
          </a>

        </div>
        </div> 
     </Cell>
   </Grid>
</div>
    )
  }
}
      
    
export default LandingPage;