import React, { useState, useEffect } from 'react';
import NavLinks from './navlink';
import Tab from 'react-bootstrap/Tab';
import ResearchSection from './researchsection';
import PublicationSection from './publicationsection';
import AchievementsSection from './achievementsection';
import ProjectSection from './projectsection';

const ContentBar = () => {
    const [activeKey, setActiveKey] = useState('research'); // Manage active tab state

    // Handle tab change
    const handleSelect = (key) => {
        setActiveKey(key);
    };

    useEffect(() => {
        console.log("Active Key: ", activeKey)
    }, [activeKey])


    return (<>
        <div className="content-holder">
            <NavLinks activeKey={activeKey} onSelect={handleSelect} />
            <Tab.Container id="left-tabs-example" defaultActiveKey="research" activeKey={activeKey} onSelect={handleSelect}>
                <Tab.Content>
                    <Tab.Pane eventKey="research">
                        <ResearchSection />
                    </Tab.Pane>
                    <Tab.Pane eventKey="projects">
                        <ProjectSection />
                    </Tab.Pane>
                    <Tab.Pane eventKey="publications">
                        <PublicationSection />
                    </Tab.Pane>
                    <Tab.Pane eventKey="achievements">
                        <AchievementsSection />
                    </Tab.Pane>
                    <Tab.Pane eventKey="other">
                        Hobbies and stuff...
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </div>
    </>);
}

export default ContentBar;