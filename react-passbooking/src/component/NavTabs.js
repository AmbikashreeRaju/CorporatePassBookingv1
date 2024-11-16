import React, { useState } from "react";
import FacilitiesList from './facilities/facilitiesList';
import BookingList from './booking/bookingList';
import { Container, Row, Tabs, Tab } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.css';
import './tabStyle.css';

const NavTabs = () => {
    const [refresh, setRefresh] = useState(false);
    return (
        <Container className="py-4">
            <Row className="justify-content-center">
                <Tabs justify variant="pills" defaultActiveKey="tab-1" className="mb-1 p-0">
                    <Tab eventKey="tab-1" title="Mandatory">
                        {/* Accordians  */}
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Booking Details</Accordion.Header>
                                <Accordion.Body>
                                    <BookingList/>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Facilities Details</Accordion.Header>
                                <Accordion.Body>
                                    <FacilitiesList key={refresh}/>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Visitos Details</Accordion.Header>
                                <Accordion.Body>
                                    <FacilitiesList key={refresh}/>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Tab>
                    <Tab eventKey="tab-2" title="Optional">
                        Tab 2 Content
                    </Tab>
                </Tabs>
            </Row>
        </Container>
    );
};

export default NavTabs;