import React, { useEffect } from "react";
import './style.css';
import {
  Container
} from 'reactstrap';

function Home() {

  //when the component mounts.....
  useEffect(() => {
    console.log("hello Home page");
  }, []);


  return (
    <Container>
      <div>
        <h1>Hello Home Page</h1>
        
      </div>
    </Container>
  );

}

export default Home;
