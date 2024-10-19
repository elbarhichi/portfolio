import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";
import gp from "../../Assets/Certification/gp.jpg";
import ibm from "../../Assets/Certification/ibm.jpg";
import sm from "../../Assets/Certification/sm.jpg";
import bcg from "../../Assets/Certification/bcg.jpg";
import py from "../../Assets/Certification/py.jpg";
import sql from "../../Assets/Certification/sql.jpg";
import uml from "../../Assets/Certification/uml.jpg";
import cn from "../../Assets/Certification/cn.jpg";
import kpmg from "../../Assets/Certification/kpmg.jpg";
import ml from "../../Assets/Certification/ml.jpg";
import eng from "../../Assets/Certification/eng.jpg";
import ds from "../../Assets/Certification/ds.jpg";



function Certification() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple"> Certifications </strong>
        </h1>
        <p style={{ color: "white" }}>
          In this section you'll find certifications of courses and specializations that I enrolled.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
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
              imgPath={cn}
              isBlog={false}
              title="Client Needs and Software Requirements"
              description="
              In this course, I learned create clear requirements to drive effective software development,
              how to visualize client needs using low-fidelity prototypes, how to maximize the effectiveness 
              of client interactions and how to adapt to changing product requirements
              "
              courseraLink="https://coursera.org/verify/QK9DKZZDC874"
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
              In this specialization, I learned advanced Python programming concepts, and worked on several OOP projects.
              "
              courseraLink="https://www.sololearn.com/certificates/CT-FETEQENK"
              />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uml}
              isBlog={false}
              title="Modeling Software Systems using UML"
              description="
              In this course, I learned how to create UML diagrams to model software systems.
              "
              courseraLink="https://coursera.org/verify/CTTMSHDHTZ43"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sql}
              isBlog={false}
              title="SoloLearn SQL"
              description=" 
              In this specialization, I learned how to create and manipulate databases using SQL.
              "
              courseraLink="https://www.sololearn.com/certificates/CT-NMO0DNAQ"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ml}
              isBlog={false}
              title="Datacamp Understanding Machine Learning"
              description=" 
              In this course, I learned how to build and evaluate machine learning models using Python and explored the Machine Learning concepts and basics.
              "
              courseraLink="https://www.datacamp.com/completed/statement-of-accomplishment/course/b916c617a6f22007dd2b7799c87a33c3e6ae451b"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eng}
              isBlog={false}
              title="Datacamp Understanding Data Engineering"
              description=" 
              In this course, I learned hat are data engineer’s core responsibilities, how they differ from data scientists, and facilitate the flow of data through an organization through hands-on exercises on collecting, cleaning, and structuring the data.
              "
              courseraLink="https://www.datacamp.com/completed/statement-of-accomplishment/course/3c9a507bdf8cd74de5062fe051f17222e1bed79c"
              />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ds}
              isBlog={false}
              title="Datacamp Understanding Data Science"
              description=" 
              In this course, I learned foundational topics of Data Science like A/B testing, time series analysis, and machine learning, and how data scientists extract knowledge and insights from real-world data. 
              "
              courseraLink="https://www.datacamp.com/completed/statement-of-accomplishment/course/e21b57ecd155d900262e34abc3f244d1a3d8db31"
              />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Certification;
