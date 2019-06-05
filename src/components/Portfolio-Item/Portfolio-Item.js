import React, { useEffect, useState } from "react";
import './style.css';
import {
  Container,
  Row,
  Col,

} from 'reactstrap';

function PortfolioItem(props) {
  const {
    name,
    date,
    repoLink,
    deployedLink,
    description,
    technologies,
    comments,
    type,
    cli,
    youtubeLink,
    image,
    tags
  } = props;

  //when the component mounts.....
  useEffect(() => {
    console.log("hello PortfolioItem page");
  }, []);




  return (
    <Container className="portfolio-item">
      <Row>

        <Col>
          <Row>
            <Col>
              <h3>{name}</h3>
            </Col>

          </Row>

          <Row>
            <Col>
              <p>{description || "No description"}</p>
            </Col>
          </Row>

          <Row>
            <Col>
              <Row>
                <Col>
                {deployedLink ? (
                  <div><a href={repoLink} target="_blank">GitHub Repo</a> | <a href={deployedLink} target="_blank">Deployed App</a></div>
                ) : (
                  <a href={repoLink} target="_blank">GitHub Repo</a>
                )}
                  
                </Col>
                

              </Row>
              
            </Col>
          </Row>

        </Col>

        <Col className="col-md-6 col-sm-12">
          <Row>
            <Col>

              {youtubeLink ? (
                <iframe width="auto" height="auto" src={youtubeLink} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              ) : (
                  <img className="video" src={image || "https://via.placeholder.com/150/000000/FFFFFF/?text=No Video"} alt="screenshot"></img>
                )}

            </Col>
          </Row>
          <Row>
            <Col>
              {/* TODO: change this to tags being links that become the filter */}
              <span><strong>Tags:</strong></span> {tags.join(", ") || "No Tags"}
            </Col>
          </Row>
        </Col>

      </Row>
    </Container >
  );

}

export default PortfolioItem;
