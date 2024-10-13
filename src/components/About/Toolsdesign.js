import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobeindesign,
  SiCanva,
  SiBlender,
  SiFigma,
  SiAdobexd,
  SiAutodesk,
  SiAdobeaudition,
  
} from "react-icons/si";


function Toolsdesign() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeaftereffects />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeillustrator />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeindesign />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBlender />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobexd />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeaudition />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAutodesk />
        </Col>
    </Row>
  );
}

export default Toolsdesign;
