import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiGooglecolab,
  SiVisualstudiocode,
  SiMysql,
  SiNetlify,
  
} from "react-icons/si";
import {
GrHadoop
} from "react-icons/gr";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecolab />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GrHadoop />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
      </Col>
    </Row>
  );
}

export default Toolstack;
