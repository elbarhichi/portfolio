import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";
import graphic from "../../Assets/Interests/graphic.png";
import bodybuilding from "../../Assets/Interests/bodybuilding.png";
import coding from "../../Assets/Interests/coding.png";
import science from "../../Assets/Interests/science.png";


function Interests() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          What Else <strong className="purple"> I do </strong>
        </h1>
        <p style={{ color: "white" }}>
          Balancing intellectual pursuits, physical exercise, and recreation is key to productivity and creativity. As an engineering student, I prioritize a sound mind and healthy body to reach my full potential.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={graphic}
              isBlog={false}
              title="Graphic design"
              description="With a background in an art school, I have shifted to graphic design to nurture my passion wich helped me developp a solid knowledge in marketing. Whether it's creating eye-catching logos or designing captivating ads or merchandise, I am committed to using my skills to deliver visually appealing designs that effectively promote brands and products."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bodybuilding}
              isBlog={false}
              title="Bodybuilding"
              description="While motivation and passion are valuable, they aren't always constant. Taking care of one's body is essential, representing the minimum standard. I maintain a stoic mindset regarding this aspect of my life. Passionate about fitness, I've crafted my bodybuilding program over the years through self-education. My dedication to a healthy lifestyle includes rigorous gym sessions and strict adherence to a nutritional regimen. Additionally, I've pursued martial arts training in disciplines such as taekwondo (2nd gup), tai jitsu, and MMA to enhance both my physical abilities and self-discipline."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coding}
              isBlog={false}
              title="Coding"
              description="Coding is an incredibly rewarding pursuit, offering both technical and philosophical delights. It challenges the mind, reshapes thinking patterns, and facilitates the creation of impactful software solutions. Through programming, individuals can wield the power to effect positive change in the world. I've dedicated myself to mastering various languages, becoming fluent in Python through self-study, acquiring proficiency in PHP during a six-week internship, and currently delving into C++ through coursework at Centrale de Lyon."           
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={science}
              isBlog={false}
              title="Science"
              description="I am interested in all forms of science, but mathematics are special, that's why after high school, I chose to pursuit a two-year intensive program of preparatory classes to the competitive entrance exams to the top engineering schools."           
            />
          </Col>
    
        </Row>
      </Container>
    </Container>
  );
}

export default Interests;
