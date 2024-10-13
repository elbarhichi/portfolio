import React from "react";
import VerticalTimeline from "./VerticalTimeline";
import VerticalTimelineElement from "./VerticalTimelineElement";
import './VerticalTimeline.css';
import './VerticalTimelineElement.css';
import { IoMdBriefcase } from "react-icons/io";



function Experience() {
  return (
    <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="June 2023 - July 2023"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoMdBriefcase />}
  >
    <h3 className="vertical-timeline-element-title">CFG BANK | Digital Transformation Strategy Consultant</h3>
    <h4 className="vertical-timeline-element-subtitle">Casablanca, Morocco</h4>
    <p>
      A 6-week internship, where i designed and developed an API for quality prospect leads gathering from Creditinfo, integrated it with the Pipedrive CRM used by the marketing team to alert them given also necessary infos about the prospect that i extract, also had a second mission of developping a client assistant chatbot, used dialogflow and extracted data from different sources such as CFG Bank website and dozens of documents.

    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="March 2023 - Present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoMdBriefcase />}
  >
    <h3 className="vertical-timeline-element-title">JECC Junior Entreprise | Business Analyst</h3>
    <h4 className="vertical-timeline-element-subtitle">Casablanca, Morocco</h4>
    <p>
      held two roles: Junior consultant, where I managed and spearheaded projects such as TRIA Company, overseeing comprehensive market and competitor analyses through conducting a 600 targeted surveys across various locations in Morocco (including Rabat, Casablanca, Tangier, Agadir, Tetouan, etc.), and utilizing Power BI to create informative dashboards aiding strategic decision-making; subsequently, I served as a graphic designer.    
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="February 2023 - Present "
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoMdBriefcase />}
  >
    <h3 className="vertical-timeline-element-title"> GrowStudio Agency | Founder </h3>
    <h4 className="vertical-timeline-element-subtitle">Casablanca, Morocco</h4>
    <p>
      Having expertise in design, I found myself drawn to marketing and design, which led me to establish GrowStudio, a digital marketing agency. Here, I've honed my skills in Web Development, Branding, SEO, Google Maps profile optimization, Logo design, and Strategic thinking. I've helped businesses attract more clients, particularly through Google Maps, by enhancing their online presence. You can explore my business at <a href="https://grows.studio" target="_blank" rel="noopener noreferrer">https://grows.studio</a>. Some of our clients include MTSAUTO, showcased at <a href="https://www.MTSauto.ma" target="_blank" rel="noopener noreferrer">https://www.MTSauto.ma</a> .
      
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2022 - Present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoMdBriefcase />}
  >
    <h3 className="vertical-timeline-element-title"> DRIPIO clothing | Founder </h3>
    <h4 className="vertical-timeline-element-subtitle">Casablanca, Morocco</h4>
    <p>
      Falling also within my design expertise, I founded Dripio, an online clothing store showcasing my original creations. At Dripio, I collaborate closely with textile production suppliers for Jackets productions and utilize direct-to-fabric (DTF) printing or embroidery techniques. From design conception to production, I oversee every step to ensure quality and consistency. Visit my store at <a href="https://dripio.youcan.store/" target="_blank" rel="noopener noreferrer">https://dripio.com/</a>.
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
  );
}

export default Experience;
