import React from 'react'
import "../css/home.css"
import HomePage from './HomePage'
import SkillsPage from './SkillsPage'
import ProjectsPage from './ProjectsPage'
import ContactPage from './ContactPage'
import AboutPage from './AboutPage'
function Home() {
    return (
        <div className="app-page">
            <HomePage />
            <div id='skills-page-anchor'></div>
            <SkillsPage />
            <div id='project-page-anchor'></div>
            <ProjectsPage />
            <AboutPage />
            <div id='contact-page-anchor'></div>
            <ContactPage />
        </div>

    )
}

export default Home