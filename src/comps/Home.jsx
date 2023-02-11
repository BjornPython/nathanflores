import React from 'react'
import "../css/home.css"
import HomePage from './HomePage'
import SkillsPage from './SkillsPage'
function Home() {
    return (
        <div className="app-page">
            <HomePage />
            <SkillsPage />
        </div>

    )
}

export default Home