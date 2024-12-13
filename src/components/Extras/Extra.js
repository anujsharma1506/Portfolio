import React from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard"; // Make sure your ProjectCard component is imported correctly
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />

      {/* Navigation bar with the /extra route */}
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Navbar.Brand href="/">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="project-navbar-nav" />
        <Navbar.Collapse id="project-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/extra">Extra</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Stroke_Prediction_Model"
              description="A predictive machine learning model designed to estimate an individual's likelihood of experiencing a stroke based on their health and demographic data."
              ghLink="https://github.com/anujsharma1506/Stroke_Prediction_Model"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Stroke_Prediction_Model"
              description="A predictive machine learning model designed to estimate an individual's likelihood of experiencing a stroke based on their health and demographic data."
              ghLink="https://github.com/anujsharma1506/Stroke_Prediction_Model"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          {/* Additional projects can be added here */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
