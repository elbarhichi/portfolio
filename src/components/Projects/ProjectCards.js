import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaArtstation } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai"; // Added YouTube icon
import { SiCoursera } from "react-icons/si"; // Added Coursera icon

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}
        {props.artstationLink && (
          <Button
            variant="primary"
            href={props.artstationLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <FaArtstation /> &nbsp;
            {"ArtStation"}
          </Button>
        )}
        {props.youtubeLink && (
          <Button
            variant="danger"
            href={props.youtubeLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <AiFillYoutube /> &nbsp;
            {"YouTube"}
          </Button>
        )}
        {props.courseraLink && (
          <Button
            variant="info" // You can customize the variant as needed
            href={props.courseraLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <SiCoursera /> &nbsp;
            {"Coursera"}
          </Button>
        )}
        {"\n"}
        {"\n"}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
