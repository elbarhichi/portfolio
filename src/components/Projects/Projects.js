import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import alumni from "../../Assets/Projects/alumni.png";
import battership from "../../Assets/Projects/battership.png";
import churn from "../../Assets/Projects/churn.png";
import crime from "../../Assets/Projects/crime.png";
import forex from "../../Assets/Projects/forex.jpg";
import gan from "../../Assets/Projects/gan.jpeg";
import graph from "../../Assets/Projects/graph.png";
import ibm from "../../Assets/Projects/ibm.png";
import internet from "../../Assets/Projects/internet.jpg";
import jecc from "../../Assets/Projects/jecc.jpg";
import MLOps from "../../Assets/Projects/MLOps.png";
import movies from "../../Assets/Projects/movies.jpg";
import mowajihi from "../../Assets/Projects/mowajihi.jpg";
import protein from "../../Assets/Projects/protein.png";
import robotics from "../../Assets/Projects/robotics.png";
import sales from "../../Assets/Projects/sales.png";
import snake from "../../Assets/Projects/snake.jpg";
import stoch from "../../Assets/Projects/stoch.jpg";
import tipe from "../../Assets/Projects/tipe.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          In this section you'll find some of the projects I've worked on recently.

        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
                
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mowajihi}
              isBlog={false}
              title="OrienTech Chatbot : Career Orientation Assistant"
              description="A Hackathon project in which I Implement a Retrieval-Augmented Generation (RAG) system to assist high school and college students in Morocco with academic and career orientation"
              demoLink="https://github.com/elbarhichi/Mouwajihi/tree/main/Demos"
              ghLink="https://github.com/elbarhichi/Mouwajihi"
              />
          </Col>
              

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gan}
              isBlog={false}
              title="WGANMF-GP : Advanced GAN for recommender systems"
              description="6 months project on development of GAN model to enhance cybersecurity by generating synthetic signals indistinguishable from authentic ones. We did venture an uncharted territory be working with multicarrier waveforms. we also developed a CNN and inceptionV3 to evaluate our GAN. really enjoyed working with an amazing team, we summarized our work on a scientific [paper](https://github.com/badreddinesaadioui/GAN-for-Wireless-signal-spoofing/blob/main/Article_Scientifique.pdf). Our future research will focus on refining the GAN model to enhance the quality and authenticity of generated signals."
              demoLink="https://github.com/badreddinesaadioui/GAN-for-Wireless-signal-spoofing/blob/main/Article_Scientifique.pdf"
              ghLink="https://github.com/badreddinesaadioui/GAN-for-Wireless-signal-spoofing/tree/main"
              />
          </Col>
                
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MLOps}
              isBlog={false}
              title="Machine learning for detection of microcalcifications"
              description="In this project, we conducted a comprehensive analysis of various machine learning models, including KNN, SVM, and random forest, with different parameter settings and combinations, to accurately detect microcalcifications on mammograms. Early detection of microcalcifications is crucial in breast cancer screening. However, the dataset used in this project was highly imbalanced, which presented a significant challenge that we overcame. This project was supervised by ECC CODING WEEK."
              demoLink="https://youtu.be/hXpkJLSBqd0"
              ghLink="https://github.com/badreddinesaadioui/Detection-Of-Microcalcifications-In-Mammography"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={protein}
              isBlog={false}
              title="TIPE Genetic Disease Propagation: A Population Modeling and Analysis Approach."
              description="Supervised personal initiative project or TIPE is a common test to most entrance examinations to the Grandes Ecoles of Science. Throughout my project, I explored the relationship between genetics, statistics, and the spread of diseases. I began by delving into the importance of probabilities in genetics and how they are vital for genetic studies. From there, I went on to write a Python code to model the spread of a disease over time. Using this code, I was able to investigate the statistical evolution of a general hereditary disease, and gain insight into how these diseases'frequency vary over time."
              ghLink="https://github.com/badreddinesaadioui/TIPE"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ibm}
              isBlog={false}
              title="Reinforcement learning Traffic light Optimization"
              description="The PLBD Project Learning By Doing is an annual project (10 months) that encourages teamwork and leadership development among a team of five members with diverse nationalities. In this project, we utilized OpenCV to analyze traffic images and extract traffic density information, which enabled us to develop an optimization code that dynamically adjusted traffic light timings to improve traffic flow and alleviate congestion in real-time. To assess the effectiveness of our optimization code, we compared our model with both a reinforcement learning-based approach and a traditional timing system using a traffic simulator SUMO. Our results highlighted the superiority of dynamic density based method."  
              ghLink="https://github.com/badreddinesaadioui/PLBD"
              />
          </Col>
                
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={churn}
              isBlog={false}
              title="Financial Portfolio Optimization with Convex Techniques in Python"
              description="we implemented an optimization model using Python and the cvxpy library to determine the optimal weights of assets in a financial portfolio. We defined constraints to ensure the total investment equaled one, targeted a specific average return, and limited the overall risk. By minimizing the quadratic form of the weights, we aimed to reduce portfolio variance. Our solution involved numerical techniques to solve for asset weights that met these criteria, effectively balancing risk and return."
              demoLink="https://colab.research.google.com/drive/1Z6_4mzTcOvSna6Oiywte-rEIL2ubJPAE?usp=sharing"
              />
          </Col>
                
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movies}
              isBlog={false}
              title="Reinforcement learning Traffic light Optimization"
              description="The PLBD Project Learning By Doing is an annual project (10 months) that encourages teamwork and leadership development among a team of five members with diverse nationalities. In this project, we utilized OpenCV to analyze traffic images and extract traffic density information, which enabled us to develop an optimization code that dynamically adjusted traffic light timings to improve traffic flow and alleviate congestion in real-time. To assess the effectiveness of our optimization code, we compared our model with both a reinforcement learning-based approach and a traditional timing system using a traffic simulator SUMO. Our results highlighted the superiority of dynamic density based method."  
              ghLink="https://github.com/badreddinesaadioui/PLBD"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sales}
              isBlog={false}
              title="Reinforcement learning Traffic light Optimization"
              description="The PLBD Project Learning By Doing is an annual project (10 months) that encourages teamwork and leadership development among a team of five members with diverse nationalities. In this project, we utilized OpenCV to analyze traffic images and extract traffic density information, which enabled us to develop an optimization code that dynamically adjusted traffic light timings to improve traffic flow and alleviate congestion in real-time. To assess the effectiveness of our optimization code, we compared our model with both a reinforcement learning-based approach and a traditional timing system using a traffic simulator SUMO. Our results highlighted the superiority of dynamic density based method."  
              ghLink="https://github.com/badreddinesaadioui/PLBD"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jecc}
              isBlog={false}
              title="Reinforcement learning Traffic light Optimization"
              description="The PLBD Project Learning By Doing is an annual project (10 months) that encourages teamwork and leadership development among a team of five members with diverse nationalities. In this project, we utilized OpenCV to analyze traffic images and extract traffic density information, which enabled us to develop an optimization code that dynamically adjusted traffic light timings to improve traffic flow and alleviate congestion in real-time. To assess the effectiveness of our optimization code, we compared our model with both a reinforcement learning-based approach and a traditional timing system using a traffic simulator SUMO. Our results highlighted the superiority of dynamic density based method."  
              ghLink="https://github.com/badreddinesaadioui/PLBD"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alumni}
              isBlog={false}
              title="Reinforcement learning Traffic light Optimization"
              description="The PLBD Project Learning By Doing is an annual project (10 months) that encourages teamwork and leadership development among a team of five members with diverse nationalities. In this project, we utilized OpenCV to analyze traffic images and extract traffic density information, which enabled us to develop an optimization code that dynamically adjusted traffic light timings to improve traffic flow and alleviate congestion in real-time. To assess the effectiveness of our optimization code, we compared our model with both a reinforcement learning-based approach and a traditional timing system using a traffic simulator SUMO. Our results highlighted the superiority of dynamic density based method."  
              ghLink="https://github.com/badreddinesaadioui/PLBD"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crime}
              isBlog={false}
              title="Reinforcement learning Traffic light Optimization"
              description="The PLBD Project Learning By Doing is an annual project (10 months) that encourages teamwork and leadership development among a team of five members with diverse nationalities. In this project, we utilized OpenCV to analyze traffic images and extract traffic density information, which enabled us to develop an optimization code that dynamically adjusted traffic light timings to improve traffic flow and alleviate congestion in real-time. To assess the effectiveness of our optimization code, we compared our model with both a reinforcement learning-based approach and a traditional timing system using a traffic simulator SUMO. Our results highlighted the superiority of dynamic density based method."  
              ghLink="https://github.com/badreddinesaadioui/PLBD"
              />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tipe}
              isBlog={false}
              title="Reinforcement learning Traffic light Optimization"
              description="The PLBD Project Learning By Doing is an annual project (10 months) that encourages teamwork and leadership development among a team of five members with diverse nationalities. In this project, we utilized OpenCV to analyze traffic images and extract traffic density information, which enabled us to develop an optimization code that dynamically adjusted traffic light timings to improve traffic flow and alleviate congestion in real-time. To assess the effectiveness of our optimization code, we compared our model with both a reinforcement learning-based approach and a traditional timing system using a traffic simulator SUMO. Our results highlighted the superiority of dynamic density based method."  
              ghLink="https://github.com/badreddinesaadioui/PLBD"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={battership}
              isBlog={false}
              title="Reinforcement learning Traffic light Optimization"
              description="The PLBD Project Learning By Doing is an annual project (10 months) that encourages teamwork and leadership development among a team of five members with diverse nationalities. In this project, we utilized OpenCV to analyze traffic images and extract traffic density information, which enabled us to develop an optimization code that dynamically adjusted traffic light timings to improve traffic flow and alleviate congestion in real-time. To assess the effectiveness of our optimization code, we compared our model with both a reinforcement learning-based approach and a traditional timing system using a traffic simulator SUMO. Our results highlighted the superiority of dynamic density based method."  
              ghLink="https://github.com/badreddinesaadioui/PLBD"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snake}
              isBlog={false}
              title="Reinforcement learning Traffic light Optimization"
              description="The PLBD Project Learning By Doing is an annual project (10 months) that encourages teamwork and leadership development among a team of five members with diverse nationalities. In this project, we utilized OpenCV to analyze traffic images and extract traffic density information, which enabled us to develop an optimization code that dynamically adjusted traffic light timings to improve traffic flow and alleviate congestion in real-time. To assess the effectiveness of our optimization code, we compared our model with both a reinforcement learning-based approach and a traditional timing system using a traffic simulator SUMO. Our results highlighted the superiority of dynamic density based method."  
              ghLink="https://github.com/badreddinesaadioui/PLBD"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stoch}
              isBlog={false}
              title="Reinforcement learning Traffic light Optimization"
              description="The PLBD Project Learning By Doing is an annual project (10 months) that encourages teamwork and leadership development among a team of five members with diverse nationalities. In this project, we utilized OpenCV to analyze traffic images and extract traffic density information, which enabled us to develop an optimization code that dynamically adjusted traffic light timings to improve traffic flow and alleviate congestion in real-time. To assess the effectiveness of our optimization code, we compared our model with both a reinforcement learning-based approach and a traditional timing system using a traffic simulator SUMO. Our results highlighted the superiority of dynamic density based method."  
              ghLink="https://github.com/badreddinesaadioui/PLBD"
              />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={internet}
              isBlog={false}
              title="Reinforcement learning Traffic light Optimization"
              description="The PLBD Project Learning By Doing is an annual project (10 months) that encourages teamwork and leadership development among a team of five members with diverse nationalities. In this project, we utilized OpenCV to analyze traffic images and extract traffic density information, which enabled us to develop an optimization code that dynamically adjusted traffic light timings to improve traffic flow and alleviate congestion in real-time. To assess the effectiveness of our optimization code, we compared our model with both a reinforcement learning-based approach and a traditional timing system using a traffic simulator SUMO. Our results highlighted the superiority of dynamic density based method."  
              ghLink="https://github.com/badreddinesaadioui/PLBD"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={graph}
              isBlog={false}
              title="Reinforcement learning Traffic light Optimization"
              description="The PLBD Project Learning By Doing is an annual project (10 months) that encourages teamwork and leadership development among a team of five members with diverse nationalities. In this project, we utilized OpenCV to analyze traffic images and extract traffic density information, which enabled us to develop an optimization code that dynamically adjusted traffic light timings to improve traffic flow and alleviate congestion in real-time. To assess the effectiveness of our optimization code, we compared our model with both a reinforcement learning-based approach and a traditional timing system using a traffic simulator SUMO. Our results highlighted the superiority of dynamic density based method."  
              ghLink="https://github.com/badreddinesaadioui/PLBD"
              />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={forex}
              isBlog={false}
              title="Reinforcement learning Traffic light Optimization"
              description="The PLBD Project Learning By Doing is an annual project (10 months) that encourages teamwork and leadership development among a team of five members with diverse nationalities. In this project, we utilized OpenCV to analyze traffic images and extract traffic density information, which enabled us to develop an optimization code that dynamically adjusted traffic light timings to improve traffic flow and alleviate congestion in real-time. To assess the effectiveness of our optimization code, we compared our model with both a reinforcement learning-based approach and a traditional timing system using a traffic simulator SUMO. Our results highlighted the superiority of dynamic density based method."  
              ghLink="https://github.com/badreddinesaadioui/PLBD"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={robotics}
              isBlog={false}
              title="Reinforcement learning Traffic light Optimization"
              description="The PLBD Project Learning By Doing is an annual project (10 months) that encourages teamwork and leadership development among a team of five members with diverse nationalities. In this project, we utilized OpenCV to analyze traffic images and extract traffic density information, which enabled us to develop an optimization code that dynamically adjusted traffic light timings to improve traffic flow and alleviate congestion in real-time. To assess the effectiveness of our optimization code, we compared our model with both a reinforcement learning-based approach and a traditional timing system using a traffic simulator SUMO. Our results highlighted the superiority of dynamic density based method."  
              ghLink="https://github.com/badreddinesaadioui/PLBD"
              />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
