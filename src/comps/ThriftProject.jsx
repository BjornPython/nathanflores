import "../css/projectsPage.css"
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChevronLeft, faChevronRight, faArrowRightToBracket,
    faCheckCircle, faCrop, faPenToSquare, faMessage
} from '@fortawesome/free-solid-svg-icons'
import js from "../svgs/javascript.svg"
import reactIcon from "../svgs/react.svg"
import nodeJs from "../svgs/node-js.svg"
import github from "../svgs/github.svg"
import rocket from "../svgs/rocket.svg"
import netlify from "../svgs/netlify.svg"
import firebase from "../svgs/firebase-icon.svg"

const displayIcon = (icon) => {
    return (
        <FontAwesomeIcon icon={icon} className="about-icn" />
    )
}

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
            {/* <video controls autoPlay loop muted className='project-image' src={locateDemo}></video> */}
            {/* <img className='project-image' src={thrift} /> */}


            <div className='carousel-parent' >
                <div className='carousel-div' style={{ ...carouselTransition }}>

                    <div className='project-about'>
                        <h3>about</h3>
                        <div className='about-contents'>
                            <p> A website where users can share pictures of their favorite thrifted outfits,
                                connect with other thrifters, and find inspiration for their
                                next fashion style.
                            </p>
                        </div>
                        <div className='about-contents'>
                            <div className="about-content"><p>• Login/Register with google </p>{displayIcon(faArrowRightToBracket)}</div>
                            <div className="about-content"><p>• Google/Email Acc Verification</p>{displayIcon(faCheckCircle)}</div>
                            <div className="about-content"><p>• Post/Profile image  Crop interface</p>{displayIcon(faCrop)}</div>
                            <div className="about-content"><p>• Customizable User Accounts</p>{displayIcon(faPenToSquare)}</div>
                            <div className="about-content"><p>• Realtime Messaging</p>{displayIcon(faMessage)}</div>

                            {/* <p>• Google/Email Acc Verification</p>
                            <p>• Post/Profile image  Crop interface</p>
                            <p>• Customizable User Accounts</p>
                            <p>• Realtime Messaging</p> */}
                            {/* <p>
                                Users can search their addresses, create their personalized
                                accounts, communicate with other members,
                                and personalize their profile. All user information is stored
                                in a MongoDB database, with jwt token auth verification
                                providing a safe and secure platform.
                            </p> */}
                        </div>
                    </div>
                    <div className='project-tech'>
                        <h3>techUsed</h3>
                        <div className='tech-used-contents'>
                            <div className='tech-used'><p>• JavaScript</p> <img src={js} style={{ marginTop: "10px" }} /></div>
                            <div className='tech-used'><p>• NodeJS</p> <img src={nodeJs} /></div>
                            <div className='tech-used'><p>• React</p> <img src={reactIcon} /></div>
                            <div className='tech-used'><p>• Firebase</p> <img src={firebase} /></div>
                        </div>
                    </div>

                    <div className='project-links'>
                        <h3>links</h3>
                        <div className='links-contents'>
                            <a href="https://friendly-alfajores-5eb56d.netlify.app/" target={"_blank"} className='content-link' ><div className='tech-used'><p>Live demo</p> <img src={rocket} /></div></a>
                            <a href="https://github.com/BjornPython/Locate-Martial-arts-webpage" target={"_blank"} className='content-link' ><div className='tech-used'><p>Github Repo</p> <img src={github} /></div></a>
                            <h3 style={{ color: "white", margin: "10px" }}>Deployed</h3>
                            <a href="https://www.netlify.com" target={"_blank"} className='content-link' ><div className='tech-used'><p>Client in Netlify</p> <img src={netlify} /></div></a>
                            <a href="https://www.render.com" target={"_blank"} className='content-link' ><div className='tech-used'><p>Backend Server in Firebase</p> <img src={firebase} id="render-icn" /></div></a>

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