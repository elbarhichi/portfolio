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
  contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
  date="April 2024 - August 2024 (Internship)"
  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  icon={<IoMdBriefcase />}
>
  <h3 className="vertical-timeline-element-title">AI Engineer | E-voluciona by Intelcia</h3>
  <p>
    • Designed personalized chatbots using advanced Retrieval-Augmented Generation (RAG) architecture, enhancing relevance with Semantic Chunking, History-Aware Retrieval, Multi-Query Retrieval, and Query Decomposition, achieving 87% answer relevancy.
    <br />• Integrated chatbot solutions into client platforms, significantly improving user experience and operational efficiency.
    <br />• Technologies: LLMs, LangChain, Azure, OpenAI, Claude, Embeddings, Streamlit, LangSmith.
    <br />• <a href="https://chatbot-evoluciona.streamlit.app/">Demo Link</a>
  </p>
</VerticalTimelineElement>

<VerticalTimelineElement
  className="vertical-timeline-element--work"
  contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
  date="September 2023 – January 2024"
  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  icon={<IoMdBriefcase />}
>
  <h3 className="vertical-timeline-element-title">Co-Founder | H'ArtNov</h3>
  <p>
    • Developed data flow pipelines on Amazon Web Services (AWS) using Apache Spark for real-time analytics on smartwatch devices.
    <br />• Integrated cardiac anomaly detection and crisis prediction models into Amazon SageMaker, achieving sensitivity and specificity exceeding 96%.
    <br />• Created smartwatch applications enabling real-time health monitoring and healthcare professional interaction.
    <br />• Awards: Twice awarded "Best Innovation Project" out of 40 competing projects.
  </p>
</VerticalTimelineElement>

<VerticalTimelineElement
  className="vertical-timeline-element--work"
  contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
  date="October 2023 - August 2024"
  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  icon={<IoMdBriefcase />}
>
  <h3 className="vertical-timeline-element-title">Data Scientist | Forafric</h3>
  <p>
    • Conducted detailed market research and competitor analysis for pasta products across major Moroccan cities (Casablanca, Rabat, Tangier, Agadir, Tetouan).
    <br />• Designed strategic consumer surveys and developed interactive dashboards using Python, Tableau, and Power BI, facilitating data-driven decision-making for new product launches.
    <br />• Insights significantly influenced client's market-entry strategy, positioning, and competitive advantage.
    <br />• <a href="https://github.com/elbarhichi/Market-Analysis-JECC">Project Link</a>
  </p>
</VerticalTimelineElement>

<VerticalTimelineElement
  className="vertical-timeline-element--work"
  contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
  date="February 2024 – April 2024 (Freelance)"
  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  icon={<IoMdBriefcase />}
>
  <h3 className="vertical-timeline-element-title">Data Scraping Specialist | The Game Changer Company</h3>
  <p>
    • Developed automated web scraping solutions using Scrapy and Selenium, extracting extensive contact data while effectively managing anti-scraping measures.
    <br />• Built structured databases containing thousands of high-quality leads, enhancing client lead-generation and marketing capabilities.
    <br />• Employed proxy rotation and data enrichment techniques for optimal scraping performance.
  </p>
</VerticalTimelineElement>

<VerticalTimelineElement
  className="vertical-timeline-element--work"
  contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
  date="June 2023 - September 2023 (Internship)"
  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  icon={<IoMdBriefcase />}
>
  <h3 className="vertical-timeline-element-title">AI Software Engineer | Africa Verify</h3>
  {/* <h4 className="vertical-timeline-element-subtitle">Casablanca, Morocco</h4> */}
  <p>
    • Transitioned manual data extraction to an automated NLP-based workflow, leveraging BeautifulSoup, NLTK, and spaCy for efficient data processing and extraction.
    <br />• Implemented NLP pipelines reducing daily data extraction time by 95%, significantly improving departmental productivity.
    <br />• Evaluated solution effectiveness with clear performance metrics and documented substantial efficiency gains.
  </p>
</VerticalTimelineElement>  
</VerticalTimeline>
  );
}

export default Experience;
