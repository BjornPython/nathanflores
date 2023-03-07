import React from 'react'
import "../css/projectsPage.css"
import "../scripts/script.js"
import RoundedComponent from './RoundedComponent'
import ProjectContent from './LocateProject'
import ThriftProject from "./ThriftProject"
function ProjectsPage() {
    return (
        <div className='projects-page'>
            <h1>PROJECTS</h1>

            <div className='projects-contents' >
                <div className='hidden'>
                    <RoundedComponent content={<ProjectContent />} frontCompClass="project" backCompClass="back-project" />
                </div>

                <div className='hidden'>
                    <RoundedComponent content={<ThriftProject />} frontCompClass="projectTwo" backCompClass="back-projectTwo" />
                </div>

                <div className='hidden'>
                    <RoundedComponent content={<ProjectContent />} frontCompClass="projectThree" backCompClass="back-projectThree" />
                </div>

            </div>
        </div>
    )
}

export default ProjectsPage