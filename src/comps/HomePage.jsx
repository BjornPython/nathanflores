import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import HomeButtons from './HomeButtons'
import gdrive from "../svgs/drive.svg"
function HomePage() {
    return (
        <div className='home-page'>



            <div className="name-bio">
                <h1>Nathan Flores</h1>
                <h3>software developer</h3>
            </div>

            <HomeButtons />
            <div className='download-div'>
                <a target={"_blank"} href="https://drive.google.com/drive/u/0/folders/1BJvl28CwNQyvjOlJbpLCjEBkMI8OxgjN"><button className='resume-btn'>myResume <img src={gdrive} className="file-icn" /></button></a>
            </div>
            <h1 className='code-dsgn'>{"< />"}</h1>
        </div>
    )
}

export default HomePage