import React, { useEffect } from "react";
import './style.css';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

function Home() {

  //when the component mounts.....
  useEffect(() => {
    console.log("hello Home page");
  }, []);


  return (
    <Container>
      <div className="homepage">
        <Row>
          <Col>
            <h2 className="front-page">Hi,</h2>
            <h2 className="front-page">I'm Charles</h2>
            <br></br>
            <h2 className="front-page fullstack">Fullstack Web Developer</h2>
          </Col>
        </Row>
        
        <Row>
          <Col>
            {/* <h6 className="front-page">icons here</h6> */}
          </Col>
        </Row>


      </div>
    </Container>
  );

}

export default Home;
