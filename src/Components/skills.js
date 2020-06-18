import React, { Component } from 'react';



class Skills extends Component {
  render() {
    return(
      <div className="skills-Banner">
        <h1>Skills</h1>

        <hr/>

        <ul className="skills-list"> 
          <li>React</li>
          <li>Javascript </li>
          <li>Nodejs</li>
          <li>Jasmine</li>
          <li>Docker</li>
          <li>
            SQL
            <ul>
              <li>PLSQL</li> 
              <li>Postgres</li> 
            </ul>  
          </li>
          
        </ul>
      </div>
    )
  }
}
      
    
export default Skills;