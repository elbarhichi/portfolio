import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillMail,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">

            I'm an <i> <b className="purple">AI Engineer</b> </i> working as <i> <b className="purple">Agentic AI Lead</b> </i> at <i> <b className="purple">Orange</b> </i> in Paris, where I design and deploy production <i> <b className="purple">multi-agent systems</b> </i> — from network-topology agents on Google Agent Engine to agent-to-agent interoperability protocols for the telecom industry.
            <br />
            <br />I graduated from <i> <b className="purple">CentraleSupélec</b> </i> in 2025 with a Master's in <i> <b className="purple">Artificial Intelligence</b> </i> as <i> <b className="purple">valedictorian</b> </i>, after two years at École Centrale Casablanca and an exchange at ESSEC Business School.
            <br />
            <br /> My passion for <i> <b className="purple">Agentic AI</b> </i> and <i> <b className="purple">GenAI systems</b> </i> drives me every day — whether I'm orchestrating autonomous agents, building RAG pipelines, or pushing AI models to production on cloud infrastructure.

            <br />
            <br />Beyond the technical realm, I'm driven by creative problem-solving, always looking for <i> <b className="purple">innovative</b> </i> ways to blend technology and business to drive meaningful impact.

            </p>
          </Col>
          <Col md={4} className="myAvtar d-flex align-items-center">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{ maxHeight: "300px" }} />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/elbarhichi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mohammed-el-barhichi/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mohammed.elbarhichi/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:mohammed.elbarhichi@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
