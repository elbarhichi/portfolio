import React from "react";
import VerticalTimeline from "./VerticalTimeline";
import VerticalTimelineElement from "./VerticalTimelineElement";
import './VerticalTimeline.css';
import './VerticalTimelineElement.css';
import { IoMdSchool } from "react-icons/io";



function Education() {
  return (
    <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2023 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoMdSchool />}
  >
    <h3 className="vertical-timeline-element-title">ECL ECOLE CENTRALE DE LYON | Ex-change generalist engineering Student</h3>
    <h4 className="vertical-timeline-element-subtitle">Lyon, France</h4>
    <p>
      Ex-change engineering student at ÉCOLE CENTRALE de Lyon (Grande École) studying Computer science, finance and economics, marketing, entrepreneurship and astrophysics.

    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2022 - 2023"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoMdSchool />}
  >
    <h3 className="vertical-timeline-element-title">ECC CENTRALE CASABLANCA | system engineering Student</h3>
    <h4 className="vertical-timeline-element-subtitle">Casablanca, Morocco</h4>
    <p>
      I joined The ÉCOLE CENTRALE CASABLANCA ECC which is a French/Morroccan engineering school (Grande École) that provides a broad-based education encompassing a wide range of subjects.
      
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2020 - 2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoMdSchool />}
  >
    <h3 className="vertical-timeline-element-title"> CPGE LYCEE MED V | MPSI-MP </h3>
    <h4 className="vertical-timeline-element-subtitle">Casablanca, Morocco</h4>
    <p>
      A 2 year formation balanced between mathematics, physical sciences, computer science and industrial sciences, which ideally prepares for future engineering professions.
      
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2019 - 2020"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoMdSchool />}
  >
    <h3 className="vertical-timeline-element-title"> LYCEE AZHAR ERRIAD 2 | High School Diploma </h3>
    <h4 className="vertical-timeline-element-subtitle">Casablanca, Morocco</h4>
    <p>
      Option : Science mathématiques B (Mention très bien)
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
  );
}

export default Education;
