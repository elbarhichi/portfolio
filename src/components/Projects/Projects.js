import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cancer from "../../Assets/Projects/cancer.png";
import genes from "../../Assets/Projects/genes.png";
import traffic from "../../Assets/Projects/traffic.png";
import porto from "../../Assets/Projects/porto.png";
import predicta from "../../Assets/Projects/predicta.png";
import gan from "../../Assets/Projects/gan.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gan}
              isBlog={false}
              title="Generative advarsarial networks (GAN) for Wireless Signal Spoofing"
              description="6 months project on development of GAN model to enhance cybersecurity by generating synthetic signals indistinguishable from authentic ones. We did venture an uncharted territory be working with multicarrier waveforms. we also developed a CNN and inceptionV3 to evaluate our GAN. really enjoyed working with an amazing team, we summarized our work on a scientific [paper](https://github.com/badreddinesaadioui/GAN-for-Wireless-signal-spoofing/blob/main/Article_Scientifique.pdf). Our future research will focus on refining the GAN model to enhance the quality and authenticity of generated signals."
              demoLink="https://github.com/badreddinesaadioui/GAN-for-Wireless-signal-spoofing/blob/main/Article_Scientifique.pdf"
              ghLink="https://github.com/badreddinesaadioui/GAN-for-Wireless-signal-spoofing/tree/main"
              />
          </Col>
                
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={predicta}
              isBlog={false}
              title="Predicta Industry : the AI solution for predictive maintenance"
              description="Developed a real-time monitoring system utilizing AWS IoT and Apache Kafka, integrated with machine learning models for anomaly detection and Slack-based alerting. Also branding and leading the creation of the startup Predicta, from market analysis to pitching in Centrale Hall of Enterprises, encompassing the development of business plans, client targeting, etc..."
              demoLink="https://predicta.saadioui.com/"
              ghLink="https://github.com/badreddinesaadioui/Predicta-AI-Startup/tree/main"
              />
          </Col>
              
                
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cancer}
              isBlog={false}
              title="Machine learning for detection of microcalcifications"
              description="In this project, we conducted a comprehensive analysis of various machine learning models, including KNN, SVM, and random forest, with different parameter settings and combinations, to accurately detect microcalcifications on mammograms. Early detection of microcalcifications is crucial in breast cancer screening. However, the dataset used in this project was highly imbalanced, which presented a significant challenge that we overcame. This project was supervised by ECC CODING WEEK."
              demoLink="https://youtu.be/hXpkJLSBqd0"
              ghLink="https://github.com/badreddinesaadioui/Detection-Of-Microcalcifications-In-Mammography"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={genes}
              isBlog={false}
              title="TIPE Genetic Disease Propagation: A Population Modeling and Analysis Approach."
              description="Supervised personal initiative project or TIPE is a common test to most entrance examinations to the Grandes Ecoles of Science. Throughout my project, I explored the relationship between genetics, statistics, and the spread of diseases. I began by delving into the importance of probabilities in genetics and how they are vital for genetic studies. From there, I went on to write a Python code to model the spread of a disease over time. Using this code, I was able to investigate the statistical evolution of a general hereditary disease, and gain insight into how these diseases'frequency vary over time."
              ghLink="https://github.com/badreddinesaadioui/TIPE"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={traffic}
              isBlog={false}
              title="Reinforcement learning Traffic light Optimization"
              description="The PLBD Project Learning By Doing is an annual project (10 months) that encourages teamwork and leadership development among a team of five members with diverse nationalities. In this project, we utilized OpenCV to analyze traffic images and extract traffic density information, which enabled us to develop an optimization code that dynamically adjusted traffic light timings to improve traffic flow and alleviate congestion in real-time. To assess the effectiveness of our optimization code, we compared our model with both a reinforcement learning-based approach and a traditional timing system using a traffic simulator SUMO. Our results highlighted the superiority of dynamic density based method."  
              ghLink="https://github.com/badreddinesaadioui/PLBD"
              />
          </Col>
                
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={porto}
              isBlog={false}
              title="Financial Portfolio Optimization with Convex Techniques in Python"
              description="we implemented an optimization model using Python and the cvxpy library to determine the optimal weights of assets in a financial portfolio. We defined constraints to ensure the total investment equaled one, targeted a specific average return, and limited the overall risk. By minimizing the quadratic form of the weights, we aimed to reduce portfolio variance. Our solution involved numerical techniques to solve for asset weights that met these criteria, effectively balancing risk and return."
              demoLink="https://colab.research.google.com/drive/1Z6_4mzTcOvSna6Oiywte-rEIL2ubJPAE?usp=sharing"
              />
          </Col>
                

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
