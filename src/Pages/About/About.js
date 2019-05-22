import React, { useEffect } from "react";
import './style.css';
import {
  Container
} from 'reactstrap';

function About() {

  //when the component mounts.....
  useEffect(() => {
    console.log("hello About page");
  }, []);


  return (
    <Container>
      <div>
        <h1>Hello About Page</h1>
        
      </div>
    </Container>
  );

}

export default About;
