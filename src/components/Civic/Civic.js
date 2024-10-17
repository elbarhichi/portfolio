import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";
import gp from "../../Assets/Civic/gp.jpg";
import ibm from "../../Assets/Civic/ibm.jpg";
import sm from "../../Assets/Civic/sm.jpg";
import bcg from "../../Assets/Civic/bcg.jpg";
import py from "../../Assets/Civic/py.jpg";
import sql from "../../Assets/Civic/sql.jpg";
import uml from "../../Assets/Civic/uml.jpg";
import cn from "../../Assets/Civic/cn.jpg";
import kpmg from "../../Assets/Civic/kpmg.jpg";



function Civic() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple"> Certifications </strong>
        </h1>
        <p style={{ color: "white" }}>
          In this section you'll find certifications of courses that I enrolled and competitions that I participated in.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ibm}
              isBlog={false}
              title="IBM Data Science"
              description=" 
              In this 10 courses Professional Certificate, I developed and honed hands-on 
              skills in Data Science and Machine Learning. I started with
              an orientation of Data Science and its Methodology, became familiar
              and used a variety of data science tools, learned Python and SQL,
              performed Data Visualization and Analysis, and created Machine
              Learning models. In the process I completed several labs and
              assignments on the cloud including a Capstone Project at the end to
              apply and demonstrate my knowledge and skills.
              "
              courseraLink="https://www.credly.com/badges/5e224d04-1447-4c58-882f-4438ad857d6a/public_url"
              />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sm}
              isBlog={false}
              title="Scrum Master Certification"
              description="
              In this specialization, I learned about managing tasks and events
              within a Sprint, Scrum terminology and roles, Scrum reporting,
              managing risks, Story Points and User Stories, scaling
              Scrum, Continuous Integration, test-Driven Development (TDD), and
              Behavior Driven Development (BDD).
              "
              courseraLink="https://coursera.org/verify/specialization/L8K6MJQJ2SLY"
              />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gp}
              isBlog={false}
              title="Google Project Management"
              description="
              In this Certificate, I have
              completed six courses, developed by Google, that include hands-on,
              practice-based assessments and are designed to prepare them for
              introductory-level roles in Project Management. They are competent in
              initiating, planning and running both traditional and agile projects.
              "
              courseraLink="https://coursera.org/verify/professional-cert/E2TFH4L2ZWLN"
              />
          </Col>    
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bcg}
              isBlog={false}
              title="BCG X Data Science Job Simulation"
              description=" 
              In this Job Simulation, I worked on a project to create a customer
               churn analysis simulation using Python. This project built my data 
               science skills in a real-world context, as well as my presentation skills 
               through creating an executive summary of my findings for the team. 
              "
              courseraLink="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/BCG%20/Tcz8gTtprzAS4xSoK_BCG_7dvGeYMiGyLhk8hcj_1700468583372_completion_certificate.pdf"
              />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kpmg}
              isBlog={false}
              title="KPMG Data Analytics Job Simulation"
              description="
              In this Job Simulation, I worked on a project to advise a client on customer 
              targeting and I practiced assessing data quality, garnering insights, and creating
               dashboards in a real-world context. This project built my data analytics skills, 
               as well as my presentation skills through creating an executive summary of my findings for the team.
              "
              courseraLink="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/KPMG%20AU/m7W4GMqeT3bh9Nb2c_KPMG%20AU_7dvGeYMiGyLhk8hcj_1708340763296_completion_certificate.pdf"
              />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={py}
              isBlog={false}
              title="SoloLearn Python"
              description="
              
              "
              courseraLink=""
              />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sql}
              isBlog={false}
              title="SoloLearn SQL"
              description=" 
              
              "
              courseraLink=""
              />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uml}
              isBlog={false}
              title="Modeling Software Systems using UML"
              description="
              
              "
              courseraLink=""
              />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cn}
              isBlog={false}
              title="Client Needs and Software Requirements"
              description=" 
              
              "
              courseraLink=""
              />
          </Col>
    
        </Row>
      </Container>
    </Container>
  );
}

export default Civic;
