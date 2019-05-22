import React, { useEffect } from "react";
import './style.css';
import {
  Container
} from 'reactstrap';

function Contact() {

  //when the component mounts.....
  useEffect(() => {
    console.log("hello Contact page");
  }, []);


  return (
    <Container>
      <div>
        <h1>Hello Contact Page</h1>
        
      </div>
    </Container>
  );

}

export default Contact;
