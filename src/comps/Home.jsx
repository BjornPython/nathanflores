import React from 'react'
import "../css/home.css"
import HomePage from './HomePage'
import SkillsPage from './SkillsPage'
import ProjectsPage from './ProjectsPage'
function Home() {
    return (
        <div className="app-page">
            <HomePage />
            <SkillsPage />
            <ProjectsPage />
        </div>

    )
}

export default Home