import React, { useEffect } from "react";
import './style.css';
import {
  Container
} from 'reactstrap';

function Resources() {

  //when the component mounts.....
  useEffect(() => {
    console.log("hello Resources page");
  }, []);


  return (
    <Container>
      <div>
        <h1>Hello Resources Page</h1>
        
      </div>
    </Container>
  );

}

export default Resources;
