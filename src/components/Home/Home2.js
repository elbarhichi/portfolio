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
              
            It all began with a spark of curiosity and my participation in the <i> <b className="purple">National Olympiads of Informatics</b> </i>
            , where I first discovered the incredible world of algorithms and problem-solving.
            <br />
            <br />Fast forward to today, I'm a final-year <i> <b className="purple">Artificial Intelligence</b> </i> Engineering student at <i> <b className="purple">CentraleSupélec</b> </i>, with a minor in Innovation.
            
            <br />
            <br /> My passion for  <i> <b className="purple">Data Science</b> </i> and <i> <b className="purple">AI projects</b> </i> drives me every day as I explore the power of technology to solve real-world problems.

            <br />
            <br />Self-motivated, agile-forward thinker with a knack for communication and teamwork. Whether I’m diving deep into <i> <b className="purple">data analytics</b> </i> or collaborating on cutting-edge <i> <b className="purple">AI models</b> </i>, I'm constantly pushing the boundaries of what's possible.

            <br />
            <br />Beyond the technical realm, I’m passionate about creative problem-solving, always looking for <i> <b className="purple">innovative</b> </i> ways to blend technology and business to drive meaningful impact.
              
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
                  href="mailto:mohammed.elbarhichi@student-cs.fr"
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
