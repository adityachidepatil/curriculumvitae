import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

function ProjectSection() {
    return (
        <div className='project-wrapper'>
            <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <img src={require("../assets/img/cygns.png")} style={{ width: 100, marginRight: 20 }} />
                        Cygnus Accounting Hub
                    </Accordion.Header>
                    <Accordion.Body>
                    Senior Software Engineer, 04/2022 – present
                    CygnusAI, Boston, United States
                    Spearheading the development of a flagship product streamlining the tax and accounting ecosystem in the U.S.
                    Designing and implementing digital solutions that automated tax and accounting workflows, reducing processing time from approximately 5 hours to just 10 minutes.
                    Collaborating with cross-functional teams to deliver scalable and user-friendly solutions.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        <img src={require("../assets/img/mkrst.png")} style={{ width: 100, marginRight: 20 }} />
                        Makersite
                    </Accordion.Header>
                    <Accordion.Body>
                    Senior Python Engineer, 03/2021 – 03/2022, <br />
                    Makersite GMBH, Stuttgart, Germany <br />
                    Employed by Mindnerves Technology Services Pvt. Ltd. as a key remote resource to Makersite projects.
                    Contributed to multiple features of lifecycle intelligence software, including developing functionalities to automate Life Cycle Assessments (LCAs) and Scope 3 analyses, improving process efficiency by 20%.
                    Collaborated with interdisciplinary teams to enhance supply chain resilience for industrial players.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>
                        <img src={require("../assets/img/gmw.png")} style={{ width: 100, marginRight: 20 }} />
                        Green Energy Economy Roadmap for Mid Wales
                    </Accordion.Header>
                    <Accordion.Body>
                        Radical Innovations Group AB | 2020–2021 <br />
                        Conducted energy consumption modeling and greenhouse gas emissions analysis for public sector assets in collaboration with the Welsh Government and local councils (Ceredigion and Powys counties).
                        Evaluated the feasibility of hydrogen fuel as an alternative energy source, projecting up to 80% emissions reduction through its integration into the energy supply chain.
                        Developed Python-based tools for data processing, scenario modeling, and visualization of decarbonization pathways for public sector assets.
                        Contributed to an actionable roadmap for hydrogen implementation, encompassing technical and economic feasibility assessments for the next decade.
                        Ensured alignment with sustainability goals by streamlining energy systems to balance environmental impact with economic viability.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>
                        <img src={require("../assets/img/epa.jpg")} style={{ width: 100, marginRight: 20 }} />
                        Blockchain-Powered Circular Economy for Single-Use Plastics
                    </Accordion.Header>
                    <Accordion.Body>
                        Radical Innovations Group AB | 2020 <br />
                        Designed a blockchain-based digital twin solution to monitor the lifecycle of single-use plastics, enabling transparent tracking from production to end-of-life processing.
                        Integrated multi-sensor-driven data to develop a robust framework for emissions monitoring and material recovery pathways, including chemical recycling.
                        Optimized supply chain processes by implementing data-driven algorithms to minimize waste and support circular economy goals.
                        Contributed to the development of a scalable, secure, and transparent system that fosters accountability and promotes sustainable practices in the plastics industry.
                        Co-authored the peer-reviewed research paper, "From Trash to Cash: How Blockchain and Multi-Sensor-Driven Artificial Intelligence Can Transform the Circular Economy of Plastic Waste," published in Administrative Sciences, MDPI (cited 200+ times).
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>
                        <img src={require("../assets/img/strmsn.png")} style={{ width: 100, marginRight: 20 }} />
                        Feasibility Analysis of Hydrogen Carriers for Sustainable Energy Transitions
                    </Accordion.Header>
                    <Accordion.Body>
                        Radical Innovations Group AB | Collaboration with Stormossen Oy | 2020 <br />
                        Conducted a detailed cost-emissions tradeoff analysis for hydrogen carriers, evaluating their viability in decarbonizing energy systems for industrial and municipal applications in Finland.
                        Designed Python-based analytical tools to process large datasets, enabling simulations that assessed the economic and environmental impacts of adopting hydrogen-based energy solutions.
                        Collaborated with Stormossen Oy to align project goals with regional energy transition targets, ensuring technical and financial feasibility for sustainable implementation.
                        Delivered actionable insights that informed strategies for integrating hydrogen carriers into Finland's renewable energy framework, contributing to long-term decarbonization goals.
                        Supported the project by presenting findings to stakeholders, emphasizing the scalability and sustainability of the proposed solutions.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header>
                        <img src={require("../assets/img/msme.png")} style={{ width: 100, marginRight: 20 }} />
                        Forecasting Water Pump Demand for Agricultural MSMEs
                    </Accordion.Header>
                    <Accordion.Body>
                        Government College of Engineering, Aurangabad <br />
                        In this project, I led a team of six members in developing a forecasting model to predict water pump demand for agricultural Micro, Small, and Medium Enterprises (MSMEs), leveraging time-series analysis and VAR (Vector AutoRegression) modeling.
                        Analyzed critical factors, including rainfall patterns, groundwater levels, and irrigation data, to create demand insights tailored to agricultural needs.
                        Scraped and processed large datasets from government portals using Python, implementing advanced data wrangling and cleaning techniques for accurate forecasting.
                        Built an interactive web application using Django for backend and Bootstrap for the front-end, providing an intuitive interface for stakeholders to visualize demand trends.
                        Won the National Championship at the Smart India Hackathon 2019, recognized by the Ministry of Micro, Small & Medium Enterprises for delivering actionable and scalable solutions to support MSMEs.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                    <Accordion.Header>
                        <img src={require("../assets/img/eesl.jpg")} style={{ width: 100, marginRight: 20 }} />
                        Smart Meter Data Analytics for Energy Consumption Optimization
                    </Accordion.Header>
                    <Accordion.Body>
                        Government College of Engineering, Aurangabad <br />
                        I led a team of four members to victory at the Incubate India Hackathon, supported by prestigious
                        organizations such as the World Bank, Asian Development Bank, WRI India, and EESL. <br />
                        Developed a Python-based analytics application to predict and optimize household energy consumption by analyzing smart meter data and external factors like weather patterns and seasonal demand.
                        Implemented data preprocessing and feature engineering techniques to identify key consumption trends, enabling targeted recommendations for prepaid energy plans.
                        Utilized artificial neural networks (ANN) for energy consumption prediction, achieving a significant improvement in forecasting accuracy.
                        Delivered a user-friendly interface using the Bootstrap framework and Django for backend development, enhancing usability for energy consumers.
                        Recognized as National Champions at the Incubate India Hackathon, supported by EESL, for presenting a scalable and impactful solution to energy efficiency challenges.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                    <Accordion.Header>
                        <img src={require("../assets/img/smartcom.png")} style={{ width: 100, marginRight: 20 }} />
                        Blockchain-Enabled Electronic Health Record (EHR) Management System
                    </Accordion.Header>
                    <Accordion.Body>
                        Government College of Engineering, Aurangabad <br />
                        Collaborated with a team of 5 to design and implement a secure, blockchain-based EHR management system, ensuring data integrity and transparency in healthcare records.
                        Explored predictive analytics for epidemic forecasting using de-identified health data collected through the EHR system, demonstrating the potential of data-driven decision-making in public health.
                        Presented findings at the Third International Conference on Smart Trends for Computing & Communications (SmartCom 2019) in Bangkok, showcasing the integration of blockchain technology into healthcare.
                        Co-authored a paper, “Multichain Enabled EHR Management System and Predictive Analytics,” published in the conference proceedings (Springer).
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="9">
                    <Accordion.Header>
                        <img src={require("../assets/img/msde.png")} style={{ width: 100, marginRight: 20 }} />
                        Zonal Mapping for Skill Development Initiatives
                    </Accordion.Header>
                    <Accordion.Body>
                        Smart India Hackathon 2018 | Deloitte Most Innovative Solution Award <br />
                        Government College of Engineering, Aurangabad <br />
                        Collaborated as part of a 6-member team to develop a data-driven solution for mapping India into zones based on publicly available datasets, addressing regional challenges in skill development.
                        Linked government schemes like MNREGA and PMKVY to enhance accessibility and alignment with zonal needs, bridging gaps between rural communities and government initiatives.
                        Analyzed patterns and trends in socio-economic and geographical data using Python to provide actionable insights for corroborating and optimizing existing government schemes.
                        Delivered a robust framework that streamlined the visualization and understanding of regional disparities, enabling data-backed policy decisions.
                        Recognized with the Most Innovative Solution Award by Deloitte for presenting a scalable model to drive equitable skill development across India.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default ProjectSection;