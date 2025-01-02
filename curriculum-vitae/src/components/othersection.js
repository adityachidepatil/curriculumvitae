import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import veer from "../assets/img/veer.png"
import sparrow from "../assets/img/sparrow.png"
import iron from '../assets/img/3000.png';
import bahu from '../assets/img/bahu.png';
import doggo from '../assets/img/doggo.png';
import ysg from '../assets/img/ysg.png';
import yuv from '../assets/img/yuv.png';

const OtherSection = () => {
    return (
        <div className='other-wrapper'>
            <section className='jobs'>
                <h6>PROFESSIONAL EXPERIENCE</h6>
                <i>Senior Software Engineer, 04/2022 – present</i><br />
                CygnusAI, Boston, United States<br />
                <ul>
                    <li>Spearheaded the development of a flagship product streamlining the tax and accounting ecosystem in the U.S. working remotely</li>
                    <li>Designed and implemented digital solutions that automated tax and accounting workflows, reducing processing time from approximately 5 hours to just 10 minutes.</li>
                    <li>Collaborated with cross-functional teams to deliver scalable and user-friendly solutions.</li>
                </ul>
                <i>Senior Python Engineer, 03/2021 – 03/2022</i><br />
                Makersite GMBH, Stuttgart, Germany<br />
                <ul>
                    <li>Employed by Mindnerves Technology Services Pvt. Ltd. as a key remote resource to Makersite projects</li>
                    <li>Contributed to multiple features of lifecycle intelligence software, including developing functionalities to automate Life Cycle Assessments (LCAs) and Scope 3 analyses, improving process efficiency by ~ 20%</li>
                    <li>Collaborated with interdisciplinary teams to enhance supply chain resilience for industrial players.</li>
                </ul>
            </section>
            <section className='hobbies'>
                <h6>Hobbies</h6>
                I usually like to either play music or draw to de-stress. <br/><br/>
                <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        style={{ width: 350, height: 350 }}
                        src={veer}
                        alt="Veer"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={sparrow}
                        style={{ width: 350, height: 350 }}
                        alt="Captain Jack"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ width: 350, height: 350 }}
                        src={iron}
                        alt="3000"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        style={{ width: 350, height: 350 }}
                        src={bahu}
                        alt="Bahu"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        style={{ width: 350, height: 350 }}
                        src={doggo}
                        alt="Doggo"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        style={{ width: 350, height: 350 }}
                        src={ysg}
                        alt="Yuvraj S G"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        style={{ width: 350, height: 350 }}
                        src={yuv}
                        alt="Yuvraj"
                    />
                </Carousel.Item>
            </Carousel>

            </section>
        </div>
    )
}

export default OtherSection;