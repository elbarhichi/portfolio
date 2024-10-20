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
    date="April 2024 - August 2024"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoMdBriefcase />}
  >
    <h3 className="vertical-timeline-element-title">E-voluciona by Intelcia | Data Science & AI Consultant</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">Casablanca, Morocco</h4> */}
    <p>
    • Designed and developed customized chatbots using Retrieval-Augmented Generation (RAG) combined with LLMs.
    <br />• Collaborated with development teams to integrate and optimize the chatbot into existing systems, exceeding
     the performance of current providers by 35%.
    </p>
  </VerticalTimelineElement>


  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="January 2024 - August 2024 "
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoMdBriefcase />}
  >
    <h3 className="vertical-timeline-element-title"> H'ArtNov | Co-Founder & CTO </h3>
    <p>
    • Collaborated with cardiologists to develop advanced models for cardiac anomaly
    detection and crisis prediction, achieving 95% sensitivity and 92% specificity.
    <br />• Designed a connected application for smartwatches, providing real-time 
    monitoring and communication with healthcare professionals, ensuring informed 
    decision-making and personalized care.
    <br />• Awards: Best Innovation Project Award twice, out of 40 competing projects.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="October 2023 - August 2024"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoMdBriefcase />}
  >
    <h3 className="vertical-timeline-element-title">Junior Entreprise JECC | Business Analyst</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">Casablanca, Morocco</h4> */}
    <p>
    • Worked as a Junior consultant, where I managed and spearheaded projects for several companies such as TRIA Company, for which
    I conducted a comprehensive assessment of Moroccan pasta market and competitor analyses across various
    locations in Morocco (including Rabat, Casablanca, Tangier, Agadir, Tetouan, etc.), designing impactful questionnaires and creating
    visually intuitive dashboards to guide strategic decision-making for the launch of a new pasta range, ultimately
    providing valuable insights that significantly contributed to our client's decision process aiding strategic decision-making.
    See the full report here : <a href="https://github.com/elbarhichi/Market-Analysis-JECC" > Project Link </a>
    </p>
  </VerticalTimelineElement>






  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="February 2024 - April 2024 "
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoMdBriefcase />}
  >
    <h3 className="vertical-timeline-element-title"> The Game Changer Company | Data Scraping Specialist </h3>
    {/* <h4 className="vertical-timeline-element-subtitle">Casablanca, Morocco</h4> */}
    <p>
    • Worked on a Freelance project on contacts extraction automation using advanced Web Scraping methods.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="Juin 2023 - September 2023"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoMdBriefcase />}
  >
    <h3 className="vertical-timeline-element-title"> Africa Verify | Data Scientist </h3>
    {/* <h4 className="vertical-timeline-element-subtitle">Casablanca, Morocco</h4> */}
    <p>
    • Analyzed department situation and identified unaddressed 
    opportunity of 70% efficiency gain with Web Scraping.
    <br />• Proposed and executed transition of manual-based data 
    extraction to AI-based NLP approach using BeautifulSoup and
    NLTK, leading to 95% time saving in daily extractions.
    </p>
  </VerticalTimelineElement>

  
</VerticalTimeline>
  );
}

export default Experience;
