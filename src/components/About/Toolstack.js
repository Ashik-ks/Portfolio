import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiPostman, SiSlack, SiNetlify } from "react-icons/si";
import { FaGitSquare, FaAws } from "react-icons/fa"; // Git and AWS icons
import { IoLogoGithub } from "react-icons/io"; // GitHub Icon
import { MdApi } from "react-icons/md"; // REST API Icon (Generic)

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdApi /> {/* REST API Icon */}
      </Col>
    </Row>
  );
}

export default Toolstack;
