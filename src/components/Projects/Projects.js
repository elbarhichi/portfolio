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
import plbd from "../../Assets/Projects/plbd.png";
import humain from "../../Assets/Projects/humain.png";



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
              description="A Hackathon project in which I implemented a Retrieval-Augmented Generation (RAG) system based on a Knowledge Graph (Graph-RAG) to assist high school and college students in Morocco with academic and career orientation"
              demoLink="https://github.com/elbarhichi/Mouwajihi/tree/main/Demos"
              ghLink="https://github.com/elbarhichi/Mouwajihi"
              />
          </Col>
              

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gan}
              isBlog={false}
              title="WGANMF-GP : Advanced GAN for recommender systems"
              description="6 months research project on development of advanced GAN model for recommender systems based on Matrix Factorization. Our research focused on adding a Wesserstein Lost and a Gradient Penalty to the base GANMF model to improve the quality of the generated recommendations."
              ghLink="https://github.com/elbarhichi/WGANMF-GP"
              />
          </Col>
                
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MLOps}
              isBlog={false}
              title="MLOps : Facial Emotion Recognition"
              description="In this MLOps project, I implemented a Facial Emotion Recognition model using OpenCV, Keras, and Flask. The model was deployed on Docker and integrated with a web application that allows users to upload images and receive real-time predictions of the emotions detected in the images. The project also includes a CI/CD pipeline using GitHub Actions, Grafana and Prometeus for automated testing and deployment of the model."
              ghLink="https://github.com/elbarhichi/MLOps-Facial-Emotion-Recognition"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={protein}
              isBlog={false}
              title="Cellular Localization Of Proteins Prediction"
              description="In this project, I worked with imbalanced dataset and compared different models to find the best approach for this prediction. I also used different techniques to handle the imbalanced dataset such as SMOTE and ADASYN. The best model was a Random Forest Classifier with an accuracy of 95.93%."
              ghLink="https://github.com/elbarhichi/Predicting-Cellular-Localization-Of-Proteins"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ibm}
              isBlog={false}
              title="IBM - SpaceX Falcon9 Landing Prediction"
              description="In this project, I worked on different Data Science stages in order to predict if the SpaceX Falcon 9 first stage will land successfully. By predicting if the first stage will land, we can determine the cost of a launch. This information can be used if an alternate company wants to bid against SpaceX for a rocket launch."  
              ghLink="https://github.com/elbarhichi/SpaceX-Falcon9-Landing-Prediction"
              />
          </Col>
                
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={churn}
              isBlog={false}
              title="BCG - Predicting and Mitigating Customer Churn in the SME Energy Market"
              description="This project focuses on addressing customer churn in the SME segment of a gas and electricity utility company, where market liberalization has led to significant losses in customer retention. The goal is to analyze customer behavior, particularly their sensitivity to price changes, to develop a predictive model that identifies those most likely to switch providers. By utilizing historical customer and pricing data, the project will test key hypotheses, perform exploratory data analysis, and engineer features to improve churn prediction accuracy. The insights from this model will support the development of strategies such as offering targeted discounts to retain at-risk customers, ultimately improving business outcomes."
              demoLink="https://github.com/elbarhichi/BCG-Predicting-and-Mitigating-Customer-Churn-in-the-SME-Energy-Market"
              />
          </Col>
                
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movies}
              isBlog={false}
              title="Movies Genre Classification"
              description="In this project, I worked on a machine learning model that can predict the genre of a movie based on its plot summary or other textual information. I used techniques like TF-IDF or word embeddings with classifiers such as Naive Bayes, Logistic Regression, or Support Vector Machines."  
              ghLink="https://github.com/elbarhichi/Movies-Genre-Classification"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sales}
              isBlog={false}
              title="Sales Analysis"
              description="In this project, we delve deep into sales data, creating insightful dashboards and providing strategic recommendations to enhance decision-making, ultimately offering a data-driven approach for optimizing business strategies. The project involved data cleaning, exploratory data analysis, and visualization to identify key trends and patterns in the sales data, enabling us to provide actionable insights that drive business growth. PowerBI was used to create interactive dashboards that visualize sales performance, product trends, and customer behavior, allowing stakeholders to make informed decisions based on data-driven analysis."
              ghLink="https://github.com/elbarhichi/Sales-Analysis/"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={plbd}
              isBlog={false}
              title="Learning by Doing : Smart Rotary Parking System"
              description="The Learning by Doing Project Learning By Doing is an annual project (10 months) that encourages teamwork and leadership development among a team of five members with diverse nationalities. In this project, we concepted a smart rotary parking system that utilized a combination of sensors, cameras, and machine learning algorithms to optimize parking space allocation and improve the efficiency of parking lot management. Our system was designed to automatically detect and classify vehicles, assign parking spaces, and guide drivers to available spots, reducing the time spent searching for parking and minimizing congestion in urban areas. Our project was recognized for its innovative approach and potential to revolutionize the future of parking systems."  
              youtubeLink="https://youtu.be/WDiRJ95tBs8"
              ghLink="https://github.com/elbarhichi/Smart-Rotary-Parking/"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jecc}
              isBlog={false}
              title="Market Analysis : Moroccan Pasta Market"
              description="In this project, we conducted a comprehensive assessment of the Moroccan pasta market, designing impactful questionnaires and creating visually intuitive dashboards to guide strategic decision-making for the launch of a new pasta range, ultimately providing valuable insights that significantly contributed to our client's decision process."  
              ghLink="https://github.com/elbarhichi/Market-Analysis-JECC"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alumni}
              isBlog={false}
              title="Alumni Scraping"
              description="In this project, I developed a web scraper to extract information of the alumnis of my School from LinkedIn profiles. The scraper was designed to extract data such as alumni names, current positions, and companies, which were then stored in a MySQL database for efficient alumni information management. Then I created an intercative dashboard (Filled MAP) to visualize the data around the world."  
              ghLink="https://github.com/elbarhichi/Alumnis-Scraping"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crime}
              isBlog={false}
              title="Criminal Information Web Scraping"
              description="In this project, I focused on web scraping to extract real-time information about criminals. The process involved designing scrapers, extracting data, and seamlessly integrating it into a MySQL database for efficient and up-to-date criminal information management."  
              ghLink="https://github.com/elbarhichi/Crime-info-web-scraping-mysql"
              />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tipe}
              isBlog={false}
              title="Modeling Crowd Behavior in Emergency Evacuation Scenarios"
              description="In this work, I developed a Python-based model that explains the behaviors of individuals during emergency evacuation situations based on the scientific principle of social forces. Afterwards, I fine-tuned the model to generate accurate predictions of the pedestrians' realistic next movements."  
              ghLink="https://github.com/elbarhichi/Modeling-Crowd-Behavior"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={battership}
              isBlog={false}
              title="Battleship Game"
              description="In this project, I developed a Battleship game using Python with a Test Driven Development approach. The game features a grid-based interface where players can place their ships and take turns firing at their opponent's ships. The game includes a scoring system that tracks the number of hits and misses, as well as a game over screen that displays the winner. The game was developed to improve my programming skills and showcase my ability to develop interactive applications."  
              ghLink="https://github.com/elbarhichi/battleship-game"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snake}
              isBlog={false}
              title="Snake Game"
              description="In this project, I developed a snake game utilizing Object-Oriented Programming in Python with a Test Driven Development approach and PyGlet library. The game features a snake that grows in size as it eats food, with the objective of avoiding collisions with the walls and itself. The game includes a scoring system that tracks the player's progress and a game over screen that displays the final score. The game was developed to improve my programming skills and showcase my ability to develop interactive applications."  
              demoLink="https://github.com/elbarhichi/Snake-Game/blob/main/gameplay.mp4"
              ghLink="https://github.com/elbarhichi/Snake-Game"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stoch}
              isBlog={false}
              title="Stochastic Optimization Algorithms"
              description="In this project, I developed a stochastic approach to optimize functions that exhibit non-convexity, multimodality, discontinuity, or non-differentiability. The project focused on implementing various stochastic optimization algorithms, such as Simulated Annealing, Genetic Algorithms, and Particle Swarm Optimization, to solve complex optimization problems. By comparing the performance of these algorithms on different test functions, the project aimed to identify the most effective approach for optimizing challenging functions."  
              ghLink="https://github.com/elbarhichi/Stochastic-Optimization"
              />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={internet}
              isBlog={false}
              title="Optimization Project : Internet Distribution in Shared Living"
              description="In this Optimization mini-project, we optimized internet distribution in shared living. Our algorithm and scipy library minimized cable lengths. Both approaches offer practical solutions, with scipy providing higher precision."  
              ghLink="https://github.com/elbarhichi/Internet-Distribution-Optimization"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={graph}
              isBlog={false}
              title="Graph Theory Project : Social Networks Analysis"
              description="This project explores the analysis of social networks using key graph theory concepts such as Edge Centrality, Betweenness Centrality, and Closeness Centrality. By examining various types of networks, the project highlights the influence and importance of nodes within these interconnected systems."  
              ghLink="https://github.com/elbarhichi/Graph-Therory-Social-Networks"
              />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={forex}
              isBlog={false}
              title="Experimental Project : Laser Data Transmission"
              description="In this project, We developed a laser data transmission system that utilized a laser diode to transmit data over a distance of 30 meters. The system was designed to transmit data at a rate of 1 Mbps using a laser diode and a photodiode to encode and decode the data. The project was developed to improve my understanding of data transmission systems and showcase my ability to develop experimental projects."  
              ghLink="https://github.com/elbarhichi/Laser-data-transmission"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={humain}
              isBlog={false}
              title="Human-Centered Design in Human-Machine Interaction : Enhancing System Performance"
              description="This project explores the integration of human factors into the design of human-machine systems to improve performance, reduce errors, and ensure user safety. By analyzing various task modeling approaches and system evaluations under both normal and degraded conditions, the project aims to enhance the overall effectiveness and user experience of human-machine interactions."  
              demoLink="https://github.com/elbarhichi/Human-Centered-Design-in-Human-Machine-Interaction--Enhancing-System-Performance-and-Safety/blob/main/Vid%C3%A9o%20Facteurs%20Humains.mp4"
              ghLink="https://github.com/elbarhichi/Human-Centered-Design-in-Human-Machine-Interaction--Enhancing-System-Performance-and-Safety"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={robotics}
              isBlog={false}
              title="Robotics Project : Waste Collecting Robot"
              description="In this project, we designed and built a waste-collecting line-following robot. We assembled the basic robot, delved into programming principles, and achieved objectives like line following, intersection handling, PID controller implementation, and integrating a robotic arm for efficient collection."  
              ghLink="https://github.com/elbarhichi/Robotics-project"
              />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
