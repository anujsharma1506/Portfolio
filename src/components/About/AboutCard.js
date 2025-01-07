import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
          Hi Everyone, I am <span className="purple">Anuj Sharma </span>
            from <span className="purple"> College Park, Maryland.</span>
            <br />
            I am currently pursuing a Master of Science in Information Systems at the University of Maryland and have a strong background in data analytics and business intelligence.
            <br />
           
            <br />
            <br />
            Apart from crunching data, some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring innovative tech solutions
            </li>
            <li className="about-activity">
              <ImPointRight />Mentoring peers in analytics and visualization
            </li>
            <li className="about-activity">
              <ImPointRight />Keeping fit with sports and fitness activities
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Strive to turn data into actionable insights!"{" "}
          </p>
          <footer className="blockquote-footer">Anuj</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
