import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPieChart } from '@fortawesome/free-solid-svg-icons'

import nodeJs from "../svgs/node-js.svg"
import mongoDb from "../svgs/mongodb-icon.svg"
import python from "../svgs/python.svg"
import flask from "../svgs/flask.svg"
import express from "../svgs/expressJS.svg"

function Methodology() {
    return (
        <div className='skill-contents'>

            <div className='skill-title'>
                <h1>backendSkills</h1>
                <FontAwesomeIcon icon={faPieChart} className="sc-skills-icn" />
            </div>


            <div className='skill-div'>
                <h3>• ExpressJS</h3>
                <img src={express} alt="" className='tech-icn' />
            </div>
            <div className='skill-div'>
                <h3>• NodeJS</h3>
                <img src={nodeJs} alt="" className='tech-icn' />
            </div>
            <div className='skill-div'>
                <h3>• MongoDB</h3>
                <img src={mongoDb} alt="" className='tech-icn' />
            </div>
            <div className='skill-div'>
                <h3>• Python</h3>
                <img src={python} alt="" className='tech-icn' />
            </div>
            <div className='skill-div'>
                <h3>• Flask</h3>
                <img src={flask} alt="" className='tech-icn' />
            </div>


        </div>
    )
}

export default Methodology