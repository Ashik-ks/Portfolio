import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg"; // C++ icon
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiJava,
  DiCss3,
  DiHtml5,
  DiBootstrap
} from "react-icons/di"; // JavaScript, React, Node, MongoDB, CSS, HTML, Bootstrap icons
import { SiTailwindcss, SiExpress } from "react-icons/si"; // Tailwind CSS and Express icons

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* HTML Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <DiHtml5 />
          <span className="icon-text">HTML</span>
        </div>
      </Col>

      {/* CSS Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <DiCss3 />
          <span className="icon-text">CSS</span>
        </div>
      </Col>

      {/* JavaScript Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <DiJavascript1 />
          <span className="icon-text">JavaScript</span>
        </div>
      </Col>

      {/* C++ Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <CgCPlusPlus />
          <span className="icon-text">C++</span>
        </div>
      </Col>

      {/* MongoDB Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <DiMongodb />
          <span className="icon-text">MongoDB</span>
        </div>
      </Col>

      {/* React Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <DiReact />
          <span className="icon-text">React</span>
        </div>
      </Col>

      {/* Node.js Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <DiNodejs />
          <span className="icon-text">Node.js</span>
        </div>
      </Col>

      {/* Express Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <SiExpress />
          <span className="icon-text">Express.js</span>
        </div>
      </Col>

      {/* Bootstrap Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <DiBootstrap />
          <span className="icon-text">Bootstrap</span>
        </div>
      </Col>

      {/* Tailwind CSS Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <SiTailwindcss />
          <span className="icon-text">Tailwind css</span>
        </div>
      </Col>

      {/* Git Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <DiGit />
          <span className="icon-text">Git</span>
        </div>
      </Col>

      {/* Java Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <DiJava />
          <span className="icon-text">Java</span>
        </div>
      </Col>
    </Row>
  );
}

export default Techstack;
