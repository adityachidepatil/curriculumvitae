import React from 'react';
import profileImage from '../assets/img/profile.jpg'; // Update path based on your file structure
import 'bootstrap-icons/font/bootstrap-icons.css';
import * as Icon from "react-bootstrap-icons";

function ProfileHolder() {
  return (
    <div className="profile-holder">
      <div className="name-title">
        <div className="fakeimg">
          <img src={profileImage} alt="profile" />
        </div>
        <p className='name'>
          Aditya <b>Chidepatil</b>
        </p>
        <div className="position">
          <p>Environmentalist</p>
        </div>
        <ul id="navlist">
          <li>
            <a href="https://scholar.google.com/citations?view_op=list_works&hl=en&authuser=2&hl=en&user=OrQgY-YAAAAJ&authuser=2" aria-label="Scholar">
              <Icon.MortarboardFill className='bi'/>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/aditya-chidepatil-a7b543152/" aria-label="LinkedIn">
            <Icon.Linkedin className='bi'/>
            </a>
          </li>
          <li>
            <a href="https://github.com/adityachidepatil" aria-label="GitHub">
            <Icon.Github className='bi'/>
            </a>
          </li>
        </ul>
      </div>
      <div className="contact-info">
        <div className="info-holder">
          <label className="info-icon">
          <Icon.Calendar2Week className='bi'/>
          </label>
          <span className="link">06 May 1998</span>
        </div>
        <div className="info-holder">
          <label className="info-icon">
          <Icon.GeoAlt className='bi'/>
          </label>
          <span className="link">Pune, India</span>
        </div>
        <div className="info-holder">
          <label className="info-icon">
          <Icon.EnvelopeArrowUp className='bi'/>
          </label>
          <a className="link" href="mailto:aditya.chidepatil@gmail.com">
            aditya.chidepatil@gmail.com
          </a>
        </div>
        <div className="info-holder">
          <label className="info-icon">
          <Icon.Phone className='bi'/>
          </label>
          <a className="link" href="tel:+918208685036">
            (+91) 8208685036
          </a>
        </div>

        <div className="creds">
          This website has been designed using <Icon.BootstrapFill className='creds-bi'/> built using <Icon.FiletypeJsx className='creds-bi'/> and deployed using <Icon.Github className='creds-bi'/> by me with <Icon.HeartFill className='creds-bi'/> in less than 24 hours.
        </div>
      </div>
    </div>
  );
}

export default ProfileHolder;
