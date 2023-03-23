
import React from "react";
import Avatar from "@mui/material/Avatar";
import SocialIcon from "../SocialIcon/SocialIcon";
import { Link } from "react-router-dom";



import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
} from "./HeroElements";
function Hero() {
  return (
    <>
    <div className="heroMain">
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <div style={{display:'flex'}}>
            <h1>Hi,</h1>
            <img width='90px' height='90px' src="https://c.tenor.com/z2xJqhCpneIAAAAM/wave-hand.gif"/>
            </div>
            <h1>I'm <span >Arunagoud</span></h1>
           
            <h5>Full Stack Web Developer</h5>
            <p style={{ fontWeight: "500" }}>I am from Vijayapur, Karnataka.</p>
            <p style={{ fontWeight: "500" }}>Phone - 7019570243</p>
            <p style={{ fontWeight: "500" }}>Email - arunkumarpatil98@gmail.com</p>
            <div className="download"    >
              <Link
              
                to="/files/ARUNAGOUD-PATIL-RESUME.pdf"
                className="btn btn--outline"
                target="_blank"
                download
              >
                Resume
              </Link>
            </div>
            {/* <div className="download">
              <a href={`mailto:arunkumarpatil98@gmail.com`}>
                <span type='button' className='btn btn--outline'>
                  Email me
                </span>
              </a>
            </div> */}

            <SocialIcon />
          </HeroLeft>
          <HeroRight>
            <Avatar
              alt="arun photo"
              src="https://i.imgur.com/oqEi4mE.jpg"
              sx={{ width: 300, height: 300 }}
            />
          </HeroRight>
        </HeroWrapper>
     
      </HeroContainer>
      
    </div>

    </>
  );
}

export default Hero;
