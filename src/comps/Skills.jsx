import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPieChart } from '@fortawesome/free-solid-svg-icons'
import js from "../svgs/javascript.svg"
import reactIcon from "../svgs/react.svg"
import angular from "../svgs/angular.svg"
import redux from "../svgs/redux.svg"
import css from "../svgs/css.svg"
import html from "../svgs/html.svg"

function Skills() {
    return (
        <div className='skill-contents'>

            <div className='skill-title'>
                <h1>frontendSkills</h1>
                <FontAwesomeIcon icon={faPieChart} className="sc-skills-icn" />
            </div>

            <div className='skill-div'>
                <h3>• JavaScript</h3>
                <img src={js} alt="" className='tech-icn' />
            </div>

            <div className='skill-div'>
                <h3>• React</h3>
                <img src={reactIcon} alt="" className='tech-icn' />
            </div>
            <div className='skill-div'>
                <h3>• Angular</h3>
                <img src={angular} alt="" className='tech-icn' />

            </div>
            <div className='skill-div'>
                <h3>• Redux</h3>
                <img src={redux} alt="" className='tech-icn' />
            </div>
            <div className='skill-div'>
                <h3>• HTML</h3>
                <img src={html} alt="" className='tech-icn' />
            </div>
            <div className='skill-div'>
                <h3>• CSS</h3>
                <img src={css} alt="" className='tech-icn' />
            </div>


        </div>
    )
}

export default Skills