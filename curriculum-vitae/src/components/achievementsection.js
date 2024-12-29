import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ssc from "../assets/img/scc2.jpg"
import sih from "../assets/img/sih.png"
import sih2_2 from '../assets/img/sih2_2.png';
import iih_1 from '../assets/img/iih_1.jpeg';

const AchievementsSection = () => {
    return (
        <div className='achievements-wrapper'>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{ width: 550, height: 550 }}
                        src={ssc}
                        alt="SmartCom"
                    />
                    <Carousel.Caption  >
                        <h5 style={{ background: "white" }}>Presented my research paper in Bangkok, Thailand</h5>
                        <p style={{ background: "white" }}> International Conference on Smart Trends in Computing and Communications: Proceedings of SmartCom 2019</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={iih_1}
                        style={{ width: 650, height: 650 }}
                        alt="Incubate India"
                    />
                    <Carousel.Caption>
                        <h5 style={{ background: "white" }}>National Champion, Incubate India Hackathon</h5>
                        <p style={{ background: "white" }}>
                            Awarded 300$ for building a smart meter data analytics platform for energy optimization, recognized by Energy Efficiency Services Limited.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{ width: 650, height: 650 }}
                        src={sih2_2}
                        alt="SIH 2019"
                    />
                    <Carousel.Caption>
                        <h5 style={{ background: "white" }}>Deollite Most Innovative Solution Award, Smart India Hackathon 2019</h5>
                        <p style={{ background: "white" }}> Awarded 900$ by the Ministry of Micro, Small & Medium Enterprises, Government of India for developing a forecasting tool for MSMEs to optimize agricultural equipment demand</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{ width: 500, height: 500 }}
                        src={sih}
                        alt="SIH 2018"
                    />
                    <Carousel.Caption  >
                        <h5 style={{ background: "white" }}>Smart India Hackathon 2018</h5>
                        <p style={{ background: "white" }}> Awarded 700$ by the Ministry of Skill Development and Entrepreneurship, Government Of India for creating a skill development model tailored to zonal challenges in India. </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default AchievementsSection;