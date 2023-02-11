import React from 'react'
import "../css/skillsPage.css"
import RoundedComponent from './RoundedComponent'
import Skills from './Skills'
function SkillsPage() {
    return (
        <div className='skills-page'>
            <div className="skills-contents">
                <RoundedComponent content={<Skills />} frontCompClass={"skills"} backCompClass={"back-skills"} />
                <RoundedComponent content={<h1>CONTENT</h1>} />
            </div>
        </div>
    )
}

export default SkillsPage