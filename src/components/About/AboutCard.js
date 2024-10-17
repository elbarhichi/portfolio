import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Mohammed El Barhichi</span>, a final-year engineering student at <span className="purple">CentraleSupélec</span>.
            <br />
            <br />Before joining CentraleSupélec, I spent two years of at <span className="purple">École Centrale Casablanca</span>, where I gained a strong foundation in general engineering and computer science. I then pursued an exchange program with <span className="purple">ESSEC Business School</span>, which allowed me to develop a dual perspective—combining business and engineering.
            <br />
            <br />I’m particularly passionate about <span className="purple">Artificial Intelligence</span>, which is why I’ve focused my academic projects around AI, such as prediction systems, obstacle detection, and recommendation systems. My most recent internship as an <span className="purple">AI consultant</span> gave me hands-on experience working on an advanced chatbot architectures, further fueling my interest in technical consulting.
            <br />
            <br />This portfolio reflects my journey, showcasing not only my projects, education, and experiences, but also the certifications I’ve earned along the way. You’ll find insights into the <span className="purple">AI-driven solutions</span> I’ve worked on, the challenges I’ve tackled, and the skills I’ve developed through formal training and hands-on work.
            <br />
            <br />Feel free to explore and reach out if you’d like to know more about my journey or the projects I’ve been involved in.
          </p>

          <p style={{ color: "rgb(96, 136, 224)" }}>
            "The only way to do great work is to love what you do."{" "}
          </p>
          <footer className="blockquote-footer">Steve Jobs</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
