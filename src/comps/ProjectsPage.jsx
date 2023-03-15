import React from 'react'
import "../css/projectsPage.css"
import "../scripts/script.js"
import RoundedComponent from './RoundedComponent'
import ProjectContent from './LocateProject'
import ThriftProject from "./ThriftProject"
import locateDemo from "../vids/locate-demo-laptop.mp4"
import thriftDemo from "../vids/thrifts-demo.mp4"

function ProjectsPage() {
    return (
        <div className='projects-page'>
            <h1>PROJECTS</h1>

            <div className='projects-contents' >
                <div className='hidden'>
                    <RoundedComponent content={<ProjectContent />} frontCompClass="project" backCompClass="back-project" />
                    <video autoPlay loop muted className='project-image' src={locateDemo}></video>
                </div>

                <div className='hidden'>

                    <RoundedComponent content={<ThriftProject />} frontCompClass="project" backCompClass="back-project" />
                    <video autoPlay loop muted className='project-image' src={thriftDemo}></video>
                </div>
                {/* 
                <div className='hidden'>
                    <RoundedComponent content={<ProjectContent />} frontCompClass="projectThree" backCompClass="back-projectThree" />
                </div> */}

            </div>
        </div>
    )
}

export default ProjectsPage