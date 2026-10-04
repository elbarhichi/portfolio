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
  date="January 2026 - Present"
  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  icon={<IoMdBriefcase />}
>
  <h3 className="vertical-timeline-element-title">AI Engineer - Agentic AI Lead | Orange</h3>
  <p>
    • Designed, built and deployed a production multi-agent system on Google Agent Engine (ADK) for network topology queries and simulation API calls, integrating Spanner Graph, OpenAPI toolsets, and an automated evaluation framework.
    <br />• Led the A2A-T initiative, a joint Orange–Huawei innovation collaboration defining an agent-to-agent protocol for the telecom industry, from protocol design to reference implementation.
    <br />• Drive agentic AI standards and technical recommendations within the Innovation Data & AI team; contribute to Orange's Corporate Expertise Center on GenAI/Agentic AI.
    <br />• Technologies: Google ADK, Agent Engine, LangChain, LangSmith, FastAPI, React, MCP, A2A Protocol, GCP (Cloud Run, Spanner Graph), Docker.
  </p>
</VerticalTimelineElement>

  <VerticalTimelineElement
  className="vertical-timeline-element--work"
  contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
  date="May 2025 - November 2025 (Internship)"
  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  icon={<IoMdBriefcase />}
>
  <h3 className="vertical-timeline-element-title">AI Software Engineer Intern | Renault Group</h3>
  <p>
    • Built and deployed a production-grade, voice-enabled AI assistant for in-car services using LangGraph, LLM APIs (OpenAI, Mistral, Llama) and multimodal pipelines (ASR/TTS, retrieval) on GCP and Azure.
    <br />• Designed agentic workflows with tool-calling, conversational memory and context-aware orchestration for low-latency in-vehicle interactions.
    <br />• Developed an evaluation and observability framework (agents-as-judges) to monitor robustness, latency and hallucination rates.
    <br />• Technologies: FastAPI, LangChain, LangGraph, Hugging Face, FAISS/Chroma, Docker, Kubernetes, CI/CD, Azure, GCP.
  </p>
</VerticalTimelineElement>

  <VerticalTimelineElement
  className="vertical-timeline-element--work"
  contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
  date="October 2024 - April 2025"
  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  icon={<IoMdBriefcase />}
>
  <h3 className="vertical-timeline-element-title">Machine Learning Project Lead | Illuin Technology</h3>
  <p>
    • Built a real-time, low-latency streaming pipeline for detecting adversarial prompts and jailbreak attempts in LLM systems.
    <br />• Implemented dynamic model hot-swapping and monitoring pipelines for uninterrupted deployment and continuous model evaluation.
    <br />• Technologies: Apache Pulsar, Beam, Spark, Kafka, MLflow, Docker, Kubernetes, Airflow, Terraform, Grafana, GitHub Actions, GCP.
  </p>
</VerticalTimelineElement>

  <VerticalTimelineElement
  className="vertical-timeline-element--work"
  contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
  date="April 2024 - August 2024 (Internship)"
  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  icon={<IoMdBriefcase />}
>
  <h3 className="vertical-timeline-element-title">GenAI Engineer Intern | Intelcia</h3>
  <p>
    • Designed and delivered end-to-end RAG-based chatbots for clients using LangChain, Azure OpenAI, FAISS/Chroma and LangSmith.
    <br />• Implemented advanced retrieval strategies (semantic chunking, multi-query and history-aware retrievers, query decomposition), achieving 87–89% answer relevancy in client evaluations.
    <br />• Built an observability UI and applied the RAGAS evaluation harness to ensure reliability and reduce hallucinations.
    <br />• Technologies: Python, LangChain/LangGraph, FAISS/Chroma, PostgreSQL, Streamlit, LangSmith, RAGAS, Airflow, Azure OpenAI, GCP.
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
  <h3 className="vertical-timeline-element-title">Data Scientist Intern | Africa Verify</h3>
  <p>
    • Automated compliance data extraction by developing an NLP pipeline combining web scraping with Named Entity Recognition models.
    <br />• Achieved a 95% reduction in manual processing time; introduced confidence scoring, error monitoring and retry/fallback strategies.
    <br />• Technologies: Python, NLTK/spaCy, BeautifulSoup, Selenium, PostgreSQL/BigQuery, Dash/Gradio.
  </p>
</VerticalTimelineElement>
</VerticalTimeline>
  );
}

export default Experience;
