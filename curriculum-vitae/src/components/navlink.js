import Nav from 'react-bootstrap/Nav';

const NavLinks = ({activeKey, onSelect}) => {
    return (
        <Nav variant="pills" className="flex-row sticky-nav" activeKey={activeKey} onSelect={onSelect}>
            <Nav.Item>
                <Nav.Link eventKey="research">Research</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="publications">Publications</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="achievements">Achievements</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="projects">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="other">Other</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}
export default NavLinks;