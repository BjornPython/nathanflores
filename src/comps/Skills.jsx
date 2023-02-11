import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import js from "../svgs/javascript.svg"
import reactIcon from "../svgs/react.svg"
import angular from "../svgs/angular.svg"
import redux from "../svgs/redux.svg"
import nodeJs from "../svgs/node-js.svg"
import mongoDb from "../svgs/mongodb-icon.svg"
import python from "../svgs/python.svg"
import flask from "../svgs/flask.svg"
function Skills() {
    return (
        <div className='skill-contents'>

            <div className='skill-title'>
                <h1>mySkills</h1>
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

export default Skills