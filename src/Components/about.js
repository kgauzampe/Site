import React, { Component } from 'react';



class About extends Component {
  render() {
    return(
<div className="AboutMe">
    
    <img
       src="./img/grad1.png"
       alt="grad1img"
       className="grad1-img"
       />
       <div className="about-banner">
      <h1>About Me</h1>
      <hr/>
    <p> I am software devloper who has a keen intrest in advancing my software skills
       and intergrating design with better functionality.Throughout the years I have embraced 
      different leadership positions from peer faciliation to serving as the Chairperson in the health and
       wellness deparment within my University.
      Within the tech enviroment I have had the pleasure of being part of a team who
       participated in the Global Legal Hackathon in 2020 and we won the third spot. 
      Aside from the tech world I am a real lover of contact sport and people development.
 </p>
 </div>
</div>
    )
  }
}
      
    
export default About;