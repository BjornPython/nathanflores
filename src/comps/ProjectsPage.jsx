import React from 'react'
import "../css/projectsPage.css"
import RoundedComponent from './RoundedComponent'
import ProjectContent from './ProjectContent'

function ProjectsPage() {
    return (
        <div className='projects-page'>
            <div className='project-txt-dsgn'>
                <h1>{"topProjects.map(project => {"}</h1>
                <h1>{"return <DisplayProject content={project} />"}</h1>
                <h1>{"})"}</h1>
            </div>

            <div className='projects-contents' >
                <RoundedComponent content={<ProjectContent />} frontCompClass="project" backCompClass="back-project" />
                <RoundedComponent content={<ProjectContent />} frontCompClass="project" backCompClass="back-project" />
                <RoundedComponent content={<ProjectContent />} frontCompClass="project" backCompClass="back-project" />

            </div>
        </div>
    )
}

export default ProjectsPage