import React from 'react'
import RoundedDiv from './RoundedDiv'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPieChart, faRocket, faPhone } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'

function HomeButtons() {
    const [activeBtn, setActiveBtn] = useState(null);

    const handleBtnEnter = (btn) => {
        console.log(btn);
        setActiveBtn(btn)
    }

    const handleBtnLeave = () => {
        setActiveBtn(0)
    }

    useEffect(() => {
        console.log("ACTIVE BTN: ", activeBtn);
    }, [activeBtn])

    return (
        <div className='home-btns'>
            <a onMouseEnter={() => handleBtnEnter(1)} onMouseLeave={handleBtnLeave} href={"#skills-page-anchor"}  >
                <RoundedDiv content={
                    <div className='home-btn'>
                        <h3>mySkills</h3>
                        <FontAwesomeIcon icon={faPieChart} />
                    </div>
                } startVal={2} activeBtn={activeBtn} btnVal={1} />
            </a>

            <a onMouseEnter={() => handleBtnEnter(2)} onMouseLeave={handleBtnLeave} href={"#project-page-anchor"} >
                <RoundedDiv content={
                    <div className='home-btn'>
                        <h3>myProjects</h3>
                        <FontAwesomeIcon icon={faRocket} />
                    </div>
                } startVal={0} activeBtn={activeBtn} btnVal={2} />
            </a>


            <a onMouseEnter={() => handleBtnEnter(3)} onMouseLeave={handleBtnLeave} href={"#contact-page-anchor"} >
                <RoundedDiv content={
                    <div className='home-btn'>
                        <h3>contactMe</h3>
                        <FontAwesomeIcon icon={faPhone} />
                    </div>
                } startVal={-2} activeBtn={activeBtn} btnVal={3} />
            </a>

        </div>
    )
}

export default HomeButtons