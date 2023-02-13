import React from 'react'
import "../css/skillsPage.css"
import RoundedComponent from './RoundedComponent'
import Skills from './Skills'
import Backend from './Backend'
function SkillsPage() {
    return (
        <div className='skills-page'>
            <div className="skills-contents">
                <RoundedComponent content={<Skills />} frontCompClass={"skills"} backCompClass={"back-skills"} />
                <RoundedComponent content={<Backend />} frontCompClass={"skills"} backCompClass={"back-skills"} />
            </div>
        </div>
    )
}

export default SkillsPage