import React from 'react';
import {Row, Col} from 'react-bootstrap';
import ProfileBar from './profilewrapper';
import ContentBar from './contentwrapper';
import "./cv.css"
function AppWrapper() {
    return ( <>
        <Row className='wrapper'>
            <Col md={3}>
                <ProfileBar />
            </Col>
            <Col md={9}>
                <ContentBar />
            </Col>
        </Row>
    </>);
}

export default AppWrapper;