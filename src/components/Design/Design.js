import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";
import merch from "../../Assets/Design/Merch.png";
import graphicd from "../../Assets/Design/graphicd.png";
import logod from "../../Assets/Design/logod.png";
import sm from "../../Assets/Design/sm.png";
import ui from "../../Assets/Design/ui.png";
import sp from "../../Assets/Design/sp.png";
import dr from "../../Assets/Design/dr.png";


function Design() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Design <strong className="purple"> Skills </strong>
        </h1>
        <p style={{ color: "white" }}>
        Design is an increasingly crucial and in-demand aspect of various industries as the digital world advances. Fortunately, my lifelong passion for art has led me to hone my skills and specialize in this field, which I consider a natural extension of my abilities. My background in art has given me a profound understanding of Design principles and techniques, allowing me to create visually stunning and innovative Designs. I find the creative aspect of Design work to be immensely fulfilling and enjoyable, and it is a true passion of mine. Continuously seeking new ways to push the boundaries of what is possible in this dynamic and exciting field, I am dedicated to delivering exceptional Design solutions to clients.
        </p>
        <h1 className="project-heading">
          What i can <strong className="purple"> Do </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={merch}
              isBlog={false}
              title="Merch Design"
              description="Over the past three years, my fervent interest in fashion has led me to actively pursue merch Design. My primary focus as a Designer is to express my thoughts and ideas through apparel, encompassing a diverse range of products such as realistic 2D and 3D clothing including varsity jackets, bombers, hoodies, t-shirts, and other merchandise. During this time, I have gained valuable experience by completing numerous freelance Design projects, in addition to creating custom clothing for local schools. To view a selection of my Designs and evaluate their quality, I invite you to explore my portfolio on Art Station."
              artstationLink="https://badrsonicsaad.artstation.com/projects/Zal2m1"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={graphicd}
              isBlog={false}
              title="graphic/ poster Design"
              description="As an artist from a young age, I have always had a love for drawing, and my passion for poster Design has reignited that love. My primary goal as a Designer is to create visually striking posters that are captivating and engaging to my audience. Through the use of tools like Procreate on iPad with Apple Pencil and Photoshop, I am able to bring my ideas to life with ease. Working as a Designer for ECC Bureau des Arts, ECC Bureau des Sports, and ECC Junior Entreprises; this has given me the opportunity to gain valuable experience in Designing posters and graphics for various events. For me, Design is about more than just making something look good, it's about telling a story and evoking emotion."  
              artstationLink="https://badrsonicsaad.artstation.com/projects/qeJdBe"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={logod}
              isBlog={false}
              title="logo Design"
              description="Logos have always fascinated me for their ability to instantly communicate a brand's personality, values, and mission. Using Design software like Adobe Illustrator and Procreate, I aim to create logos that are visually appealing and conceptually strong. With years of freelancing experience, I have honed my ability to identify the unique elements that set each brand apart and translate them into a memorable visual identity. In my logo Design process, I also strive to tell a compelling brand story and build a strong brand identity."
              artstationLink="https://badrsonicsaad.artstation.com/projects/dKyB3e"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sm}
              isBlog={false}
              title="Community management"
              description="In today's world, social media has become a ubiquitous tool used by people all over the globe. Traditional forms of advertising such as TV or outdoor ads are no longer as effective. Building a strong digital presence on social media is now crucial for companies and startups, as it provides a cost-effective way to gain popularity through free advertising. As someone who is passionate about this field, I have worked as a social media manager and continuously strive to improve my skills. With my Design expertise, I am eager to further expand my knowledge in social media management."           
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ui}
              isBlog={false}
              title="UI/UX Design"
              description="UI and UX Design play a pivotal role in crafting compelling and user-centric digital experiences. As a Design professional, I have honed my expertise in this critical field through my completion of the Google UX Design Professional Certificate, which has provided me with a solid foundation and in-depth understanding of best practices. Furthermore, I have actively participated in a UI/UX Design competition, the L'Oréal Brandstorming event, showcasing my skills and creativity in creating innovative Designs. You can view examples of my work on my GitHub profile, highlighting my commitment to staying updated with the latest trends and techniques in UI and UX Design."  
              artstationLink="https://badrsonicsaad.artstation.com/projects/ao0Z82"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sp}
              isBlog={false}
              title="Sponsorship proposal Design"
              description="Sponsorship proposal are a creative tool that I utilize to captivate the minds of potential clients. I have had extensive experience in creating these folders as part of my involvement with the ECC Bureau des Sports, where we regularly organize events and seek sponsorship. These folders are carefully crafted to include various elements such as event regulations, invitations, badges, event posters, and event structure. The goal is to create a visually appealing and comprehensive package that effectively communicates the details and benefits of the event, enticing sponsors to participate and support our initiatives."           
              ghLink="https://github.com/badreddinesaadioui/Sponsorship-proposals"
            />
          
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dr}
              isBlog={false}
              title="Drawing"
              description="From a young age, drawing has been a fundamental aspect of my life. Inspired by cartoons and anime, I have always been captivated by the power of art to create stories and explore endless possibilities through imaginative combinations. As a result, I have developed some skills in drawing and honed my creativity, channeling my passion into my YouTube channel where I used to share some of my drawing process videos. Additionally, I invite you to visit my ArtStation profile to see a showcase of my artwork, which reflects my unwavering dedication to the world of drawing."
              artstationLink="https://badrsonicsaad.artstation.com/projects/PX6VbZ"
              youtubeLink="https://www.youtube.com/@mounim3557"
            />
          
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Design;
