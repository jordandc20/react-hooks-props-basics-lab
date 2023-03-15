import React from "react";
import Links from "./Links";



function About(props) {

  // function Bio() {
  //   if (props.bio && props.bio.trim().length > 1) {
  //     return <p>{props.bio}</p>
  //   } else {
  //     return null
  //   }
  // }

  return (
    <div id="about">
      <h2>About Me</h2>
      {/* <Bio  /> */}
      {props.bio && props.bio.trim().length > 1 ? <p>{props.bio}</p> : null}

      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
    <Links github={props.links.github} linkedin={props.links.linkedin}/> 
    </div>
  );

}

export default About;
