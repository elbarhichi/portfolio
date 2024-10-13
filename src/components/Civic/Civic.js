import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";
import gp from "../../Assets/Civic/gp.png";
import ai from "../../Assets/Civic/ai.png";
import sm from "../../Assets/Civic/sm.png";


function Civic() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Online <strong className="purple"> Certifications </strong>
        </h1>
        <p style={{ color: "white" }}>
          in this section you'll find certifications of courses that i enrolled...
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ai}
              isBlog={false}
              title="IBM AI Engineering"
              description=" Learners who have completed this 6 course Professional Certificate have a practical understanding of Machine Learning (ML) & Deep Learning (DL). They have technical skills to start a career in AI Engineering, and can: • Implement ML algorithms including Classification, Regression, Clustering, and Dimensional Reduction using scipy & scikitlearn • Perform ML on Big Data and deploy ML Algorithms and Pipelines on Apache Spark • Demonstrate understanding of Deep Learning models such as autoencoders, restricted Boltzmann machines, convolutional networks, recursive neural networks, and recurrent networks • Build deep learning models and neural networks using Keras, PyTorch and Tensorflow libraries • Demonstrate ability to present and communicate outcomes of deep learning projects."
              courseraLink="https://coursera.org/share/b943377084cee42d0eaa93c7d268386b"
              />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sm}
              isBlog={false}
              title="Scrum Master Certification"
              description=" In this specialization, you'll learn about managing tasks and events within a Sprint, Scrum terminology and roles, Scrum reporting, and managing risks. We'll discuss Story Points and User Stories, scaling Scrum, Continuous Integration, test-Driven Development (TDD), and Behavior Driven Development (BDD)."
              courseraLink="https://coursera.org/share/0b6a585db244b697edd19df7c6aac2eb"
              />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gp}
              isBlog={false}
              title="Google Project Management"
              description=" Google Project Management on Coursera is a comprehensive online course that provides learners with the knowledge and skills to effectively manage projects using Google's tools and methodologies. The course covers topics such as project planning, execution, monitoring, and closure, as well as effective communication, team collaboration, and risk management. Learners will also gain insights into Google's project management philosophy and best practices. The course is self-paced and offers a mix of instructional videos, interactive assignments, and real-world case studies to help learners develop practical project management skills using Google's approach."
              courseraLink="https://www.coursera.org/account/accomplishments/professional-cert/ABYJPG7EJGQC?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof"
              />
          </Col>    
          
    
        </Row>
      </Container>
    </Container>
  );
}

export default Civic;
