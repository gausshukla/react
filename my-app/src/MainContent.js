import React from 'react'
import pic from './images/profile.jpg'

export default function MainContent() {
  return (
    <div>
      <div class="shift">
        <div class="main">
          
        <h2>About me-</h2>
        <p>I'm currently pursuing B.Tech @CSIT from IET MJPRU Bareilly.
        I'm in first year and exploring Web Development and DSA.
        Getting better in Web Development and learning DSA in C++. I'm comfortable with HTML, CSS, BOOTSTRAP and JAVASCRIPT. Looking Forward to become a full stack Developer. I love to take challenges. Apart from academics and career I'm a travel enthusiast and explorer.</p>
        </div>
        </div>
        <div class="main">
            <h2>Skills-</h2>
            <ul>
  <li>C++</li>
  <li>Competitive Coding</li>
  <li>HTML</li>
  <li>CSS</li>
  <li>React</li>
       </ul>  
        </div>
        <div class="shift">
        <div class="main">
            <h2>Projects-</h2>
            <p>Built A portfolio site using HTML,CSS and REACT.
Still learning and experimenting.</p>
        </div>
        </div>
        <div class="main2">
            <img src={pic} class="main2"/>
            
        </div>
        
        </div>
  )
}
