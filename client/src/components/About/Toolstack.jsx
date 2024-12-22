import React from "react";
import { Col, Row } from "react-bootstrap";
import * as SiIcons from "react-icons/si";  // Import all icons from Si
import { FaGitSquare, FaAws } from "react-icons/fa"; // Git and AWS icons
import { IoLogoGithub } from "react-icons/io"; // GitHub Icon
import { MdApi } from "react-icons/md"; // REST API Icon (Generic)

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiIcons.SiVim /> {/* Alternative to VS Code */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIcons.SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIcons.SiNetlify />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIcons.SiSlack />
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
