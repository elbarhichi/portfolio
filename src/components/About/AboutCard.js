import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Mohammed El Barhichi</span>, an <span className="purple">AI Engineer</span> working as <span className="purple">Agentic AI Lead</span> at <span className="purple">Orange</span> in Paris, where I design and deploy production multi-agent systems.
            <br />
            <br />I graduated from <span className="purple">CentraleSupélec</span> in 2025 with a Master's degree in Artificial Intelligence — <span className="purple">valedictorian</span> of my class — after two years at <span className="purple">École Centrale Casablanca</span> and an exchange program at <span className="purple">ESSEC Business School</span>, which gave me a dual engineering-and-business perspective.
            <br />
            <br />My work focuses on <span className="purple">Agentic AI</span> and <span className="purple">GenAI systems</span>: multi-agent orchestration, agent-to-agent protocols, RAG architectures, and cloud-native AI deployment. Before Orange, I built a voice-enabled in-car AI assistant at <span className="purple">Renault Group</span> and real-time adversarial-prompt detection pipelines at <span className="purple">Illuin Technology</span>.
            <br />
            <br />This portfolio reflects my journey — the AI-driven systems I've shipped, the challenges I've tackled, and the skills I've built along the way.
            <br />
            <br />Feel free to explore and reach out if you'd like to know more.
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
