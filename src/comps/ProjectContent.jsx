import React from 'react'
import "../css/projectsPage.css"
import website from "../images/locate-homepage.png"
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import js from "../svgs/javascript.svg"
import reactIcon from "../svgs/react.svg"
import redux from "../svgs/redux.svg"
import nodeJs from "../svgs/node-js.svg"
import mongoDb from "../svgs/mongodb-icon.svg"
import express from "../svgs/expressJS.svg"
import locateDemo from "../vids/locate-martial-arts-demo.mp4"
function ProjectContent() {

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
            <video autoPlay loop muted className='project-image' src={locateDemo}></video>
            {/* 
            <video loop autoPlay={true} className='project-image'>
                <source src={locateDemo} type="video/mp4" />
            </video> */}

            <div className='carousel-parent' >
                <div className='carousel-div' style={{ ...carouselTransition }}>

                    <div className='project-about'>
                        <h3>about</h3>
                        <div className='about-contents'>
                            <p> A user-friendly platform,
                                specifically designed to bring martial artists together.
                                Integrated with a working leaflet maps,
                                users can search the map for the locations of
                                nearby fellow martial artists.
                            </p>
                            <p>
                                Users can create their personalized
                                accounts, allowing them to communicate with other members,
                                and personalize their profile. All user information is stored
                                in a MongoDB database, with jwt token auth verification for
                                every request, providing a safe and secure platform.
                            </p>
                        </div>
                    </div>
                    <div className='project-tech'>
                        <h3>techUsed</h3>
                        <div className='tech-used-contents'>
                            <div className='tech-used'><p>• JavaScript</p> <img src={js} style={{ marginTop: "10px" }} /></div>
                            <div className='tech-used'><p>• React</p> <img src={reactIcon} /></div>
                            <div className='tech-used'><p>• NodeJS</p> <img src={nodeJs} /></div>
                            <div className='tech-used'><p>• MongoDB</p> <img src={mongoDb} /></div>
                            <div className='tech-used'><p>• Redux</p> <img src={redux} /></div>
                            <div className='tech-used'><p>• ExpressJS</p> <img src={express} /></div>
                        </div>
                    </div>

                    <div className='project-links'>
                        <h3>links</h3>
                        <div className='links-contents'>
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

export default ProjectContent