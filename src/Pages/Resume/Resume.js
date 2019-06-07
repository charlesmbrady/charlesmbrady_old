import React, { useEffect, useState } from "react";
import './style.css';
import {
  Container,
  Row,
  Col,
  Collapse
} from 'reactstrap';

function Resume() {

  const [sectionOne, setSectionOne] = useState(false);
  const [sectionTwo, setSectionTwo] = useState(false);
  const [sectionThree, setSectionThree] = useState(false);
  const [sectionFour, setSectionFour] = useState(false);
  const [sectionFive, setSectionFive] = useState(false);

  //when the component mounts.....
  useEffect(() => {
    console.log("hello Resume page");
  }, []);


  return (
    <Container>
        <Row className="row">
          <Col>
            <div className="resume-section section-head">
              <h4 onClick={() => setSectionOne(!sectionOne)}>Work Experience</h4>
            </div>
            <Collapse className="first-collapse" isOpen={sectionOne}>
              <h3>Validity</h3>
              <h6>QA Engineer - Jan 2019 to Present</h6>
              <ul className="align-content-left">
                <li>Design test plans, scenarios, scripts and procedures.</li>
                <li>Test system modifications to prepare for implementation.</li>
                <li>Document software defects, using a bug trackings system, and report defects to software developers.</li>
                <li>Participate in product design reviews to provide input on functional requirements, product designs, schedules, or potential problems.</li>
                <li>Investigate customer problems referred by technical support.</li>
              </ul>

              <h6>Customer Success Manager - Aug 2018 to Jan 2019</h6>
              <ul className="align-content-left">
                <li>Resolve escalated tech-support cases.</li>
                <li>Build and work with Reports, and Objects to manage customer relationships in Salesforce CRM.</li>
                <li>Provide proactive outreach to customers for upsells, and to ensure maximum use and value is gained from our tools</li>
                <li>Recommend data-management best practices such as object deduplication order, as well as design custom solutions for unique situations in customer organizations</li>
                <li>Help design and implement internal processes in the client services department, and optimize Salesforce experience within our company</li>
              </ul>

              <h6>Technical Support Specialist - Jul 2017 to Aug 2018</h6>
              <ul className="align-content-left">
                <li>Host live technical product training webinars, and produce recorded training tutorials for our data quality products DemandTools, PeopleImport, and DupeBlocker</li>
                <li>Use Salesforce and Service Cloud to quickly resolve all incoming cases, as well as manage and distribute caseload amongst team members.</li>
                <li>Advise database administrators from hundreds of organizations on automation tools and techniques for scheduled data quality jobs.</li>
                <li>Use algorithms to develop job "scenarios" that contain criteria for things like data standardization, and record deduplication.</li>
              </ul>
            </Collapse>
          </Col>
        </Row>
        <Row className="row">
          <Col>
            <div className="resume-section section-head">
              <h4 onClick={() => setSectionTwo(!sectionTwo)}>Education</h4>
            </div>
            <Collapse className="first-collapse" isOpen={sectionTwo}>
              <h6>UNC Chapel Hill</h6>
              <h3>Full-stack MERN Certification</h3>

              <br></br>
              <h6>UNC Chapel Hill</h6>
              <h3>B.S. Exercise and Sports Science</h3>

            </Collapse>
          </Col>
        </Row>
        <Row className="row">
          <Col>
            <div className="resume-section section-head">
              <h4 onClick={() => setSectionThree(!sectionThree)}>Credentials and Licenses</h4>
            </div>
            <Collapse className="first-collapse" isOpen={sectionThree}>
              <h3>Salesforce Administrator</h3>
              <h4>Salesforce Service Cloud Consultant</h4>
            </Collapse>
          </Col>
        </Row>
        <Row className="row">
          <Col>
            <div className="resume-section section-head">
              <h4 onClick={() => setSectionFour(!sectionFour)}>Additional Skills</h4>
            </div>
            <Collapse className="first-collapse" isOpen={sectionFour}>
              <ul className="align-content-left">
                <li>Consistently seeking and learning new technology</li>
                <li>CircleCI - Continuous Integration</li>
                <li>Automated testing with Cypress.io</li>
                <li>Agile Methodologies</li>
                <li>Salesforce Administration</li>
              </ul>

            </Collapse>
          </Col>
        </Row>
        <Row className="row">
          <Col>
            <div className="resume-section section-head">
              <h4 onClick={() => setSectionFive(!sectionFive)}>Other Interests/Hobbies</h4>
            </div>
            <Collapse className="first-collapse" isOpen={sectionFive}>
              <h4>Surfing</h4>
              <h4>Guitar</h4>
              <h4>Piano</h4>
            </Collapse>
          </Col>
        </Row>
    </Container>
  );

}

export default Resume;
