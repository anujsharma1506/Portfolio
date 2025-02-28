import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
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
              //  demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Customer-Retention-and-Churn-in-the-Airline-Industry"
description="This project predicts customer churn in the airline industry using machine learning models like Random Forest and Gradient Boosting. By analyzing key factors such as travel type and loyalty points, it provides actionable insights to help airlines improve retention strategies and enhance customer satisfaction."
              ghLink="https://github.com/anujsharma1506/Customer-Retention-and-Churn-in-the-Airline-Industry"
              //  demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="People-Analytics-Understanding-Employee-Performance-and-Retention"
              description="This project uses people analytics to analyze employee performance, retention, and demographics, providing actionable insights to enhance workforce satisfaction, retention strategies, and organizational decision-making."
              ghLink="https://github.com/anujsharma1506/People-Analytics-Understanding-Employee-Performance-and-Retention"
              //  demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Fraud-Detection-and-Prevention-in-Credit-Card-Transactions"
              description="A predictive machine learning model designed to estimate an individual's likelihood of experiencing a stroke based on their health and demographic data."
              ghLink="https://github.com/anujsharma1506/Fraud-Detection-and-Prevention-in-Credit-Card-Transactions"
              //  demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Traffic-Violation-Analysis-on-Montgomery-County"
              description="A predictive machine learning model designed to estimate an individual's likelihood of experiencing a stroke based on their health and demographic data."
              ghLink="https://github.com/anujsharma1506/-Traffic-Violation-Analysis-on-Montgomery-County"
              //  demoLink="https://chatify-49.web.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
