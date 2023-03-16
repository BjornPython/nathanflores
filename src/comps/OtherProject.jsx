import React from 'react'
import "../css/projectsPage.css"
import website from "../images/locate-homepage.png"
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChevronLeft, faChevronRight, faPenToSquare, faMessage,
    faWandMagicSparkles, faMapLocationDot, faLocationCrosshairs
} from '@fortawesome/free-solid-svg-icons'
import js from "../svgs/javascript.svg"
import reactIcon from "../svgs/react.svg"
import redux from "../svgs/redux.svg"
import nodeJs from "../svgs/node-js.svg"
import mongoDb from "../svgs/mongodb-icon.svg"
import express from "../svgs/expressJS.svg"
import github from "../svgs/github.svg"
import rocket from "../svgs/rocket.svg"
import netlify from "../svgs/netlify.svg"
import render from "../svgs/render.svg"


const displayIcon = (icon) => {
    return (
        <FontAwesomeIcon icon={icon} className="about-icn" />
    )
}



function OtherProject() {

    const [xVal, setxVal] = useState(0)

    const carouselTransition = {
        "transform": `translateX(${xVal}px)`,
        "transition": "transform 0.2s ease-in-out",
    }

    const handleLeftClick = () => {
        console.log("CURRENT XVAL: ", xVal);
        if (xVal === 0) { return }
        else {
            console.log("setting x val"); setxVal(prevX => { return prevX += 300 })
        }
    }

    const handleRightClick = () => {

        if (xVal === -600) { return }
        else { setxVal(prevX => { return prevX -= 300 }) }
    }

    return (
        <div className='project-content ' >
            {/* <video controls autoPlay loop muted className='project-image' src={locateDemo}></video> */}


            <div className='carousel-parent' >
                <div className='carousel-div' style={{ ...carouselTransition }}>

                    <div className='project-about'>
                        <h3>about</h3>
                        <div className='about-contents'>
                            <p> A website where a pool construction company.
                                Displays their about page, their plans, a contact page, and showcases their past projects.
                            </p>
                        </div>
                        <div className='about-contents'>


                            <div className="about-content"><p>• IN CONSTRUCTION :D</p></div>

                        </div>
                    </div>
                    <div className='project-tech'>
                        <h3>techUsed</h3>
                        <div className='tech-used-contents'>
                            <div className='tech-used'><p>• IN CONSTRUCTION :D</p> </div>

                        </div>
                    </div>

                    <div className='project-links'>
                        <h3>links</h3>
                        <div className='links-contents'>
                            <a href="https://www.netlify.com" target={"_blank"} className='content-link' ><div className='tech-used'><p>IN CONSTRUCTION :D</p> </div></a>

                        </div>
                    </div>

                </div>
            </div>

            <div className='project-btns'>
                <FontAwesomeIcon icon={faChevronLeft} className="arrow-btns" onClick={handleLeftClick} />
                <FontAwesomeIcon icon={faChevronRight} className="arrow-btns" onClick={handleRightClick} />
            </div>
        </div>
    )
}

export default OtherProject