import React from 'react'
import "../css/home.css"
import HomePage from './HomePage'
import SkillsPage from './SkillsPage'
import ProjectsPage from './ProjectsPage'
import ContactPage from './ContactPage'

function Home() {
    return (
        <div className="app-page">
            <HomePage />
            <div id='skills-page-anchor'></div>
            <SkillsPage />
            <div id='project-page-anchor'></div>
            <ProjectsPage />
            <div id='contact-page-anchor'></div>
            <ContactPage />
        </div>

    )
}

export default Home