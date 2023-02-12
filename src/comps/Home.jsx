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
            <SkillsPage />
            <ProjectsPage />
            <ContactPage />
        </div>

    )
}

export default Home