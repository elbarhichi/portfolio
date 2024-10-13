import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Type from "./Type";

function ComingSoon() {
  return (
    <section>
      <Container fluid className="soon-section">
        <Particle />
        <Container className="soon-content">
          <Row>
            <Col md={7} className="soon-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                My Website is
                <strong className="main-name"> under Maintenance</strong>
              </h1>
              <br/><br/>
              <h4>  Check in the meantime this website for other information : https://www.linkedin.com/in/badreddine-saadioui-624583257/</h4>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default ComingSoon;
