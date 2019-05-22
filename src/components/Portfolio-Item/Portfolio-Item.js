import React, { useEffect } from "react";
import './style.css';
import {
  Container,
  Row,
  Col
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
              <h5>{name}</h5>
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
                  <a href={repoLink}>GitHub Repo</a>
                </Col>

              </Row>
              <Row>
                <Col>
                  <a href={deployedLink}>Deployed App</a>
                </Col>
              </Row>
            </Col>
          </Row>

        </Col>

        <Col>
          <Row>
            <Col>
              <img src={image || "https://via.placeholder.com/150/000000/FFFFFF/?text=No Video"} alt="screenshot"></img>
            </Col>
          </Row>
          <Row>
            <Col>
              <span><strong>Tags:</strong></span> {tags.join("") || "No Tags"}
            </Col>
          </Row>
        </Col>

      </Row>
    </Container>
  );

}

export default PortfolioItem;
