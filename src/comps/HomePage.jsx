import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import HomeButtons from './HomeButtons'

function HomePage() {
    return (
        <div className='home-page'>

            <div className='download-div'>
                <h3>const resumePreview =</h3>
                < FontAwesomeIcon icon={faFile} className="download-icn" />
            </div>

            <div className="name-bio">
                <h1>Nathan Flores</h1>
                <h3>software developer</h3>
            </div>

            <HomeButtons />

        </div>
    )
}

export default HomePage