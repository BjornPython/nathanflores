import React from 'react'
import "../css/skillsPage.css"
import RoundedComponent from './RoundedComponent'
import Skills from './Skills'
import Methodology from './Methodology'
function SkillsPage() {
    return (
        <div className='skills-page'>
            <div className="skills-contents">
                <RoundedComponent content={<Skills />} frontCompClass={"skills"} backCompClass={"back-skills"} />
                <RoundedComponent content={<Methodology />} frontCompClass={"methodology"} backCompClass={"back-methodology"} />
            </div>
        </div>
    )
}

export default SkillsPage