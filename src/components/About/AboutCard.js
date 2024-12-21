import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ashik ks </span>
            from <span className="purple"> Kerala, India.</span>
            <br />
            I am currently pursuing a MERNfullstack internship.
            <br />
            I have completed Bachelor of Computer Application  at Calicut University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to create technology that empowers change and shapes the future!"{" "}
          </p>
          <footer className="blockquote-footer">Ashik</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
