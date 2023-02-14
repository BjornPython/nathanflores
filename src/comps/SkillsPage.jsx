import React from 'react'
import "../css/skillsPage.css"
import RoundedComponent from './RoundedComponent'
import Skills from './Skills'
import Backend from './Backend'
function SkillsPage() {
    return (
        <div className='skills-page' id='skills-page'>
            <div className="skills-contents">
                <div className='hidden frontend-div'>
                    <RoundedComponent content={<Skills />} frontCompClass={"skills"} backCompClass={"back-skills"} />
                </div>
                <div className='hidden backend-div'>
                    <RoundedComponent content={<Backend />} frontCompClass={"skills"} backCompClass={"back-skills"} />
                </div>
            </div>
        </div>
    )
}

export default SkillsPage