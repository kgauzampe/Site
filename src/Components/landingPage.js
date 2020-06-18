import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';


class LandingPage extends Component {
  render() {
    return(
<div style={{width: '100%', margin: 'auto'}}>
   <Grid className="landing-grid">
     <Cell col={12}>
       <img
       src="./img/kgauza.png"
       alt="landingimg" 
       className="landing-img"
       />
      <div className="banner-text">
        <h1>Junior Web developer</h1>
        <hr/>
        <p> Front-end developer </p>
        <div className="social-links">
        
           {/* Github */}
           <a href= "https://github.com/kgauzampe" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square"  aria-hidden="true"/>
          </a>

            {/* linkedin */}
            <a href= "https://github.com/kgauzampe" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square"  aria-hidden="true"/>
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