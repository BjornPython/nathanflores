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
            <div onMouseEnter={() => handleBtnEnter(1)} onMouseLeave={handleBtnLeave} >
                <RoundedDiv content={
                    <div className='home-btn'>
                        <h3>mySkills</h3>
                        <FontAwesomeIcon icon={faPieChart} />
                    </div>
                } startVal={2} activeBtn={activeBtn} btnVal={1} />
            </div>

            <div onMouseEnter={() => handleBtnEnter(2)} onMouseLeave={handleBtnLeave} >
                <RoundedDiv content={
                    <div className='home-btn'>
                        <h3>myProjects</h3>
                        <FontAwesomeIcon icon={faRocket} />
                    </div>
                } startVal={0} activeBtn={activeBtn} btnVal={2} />
            </div>


            <div onMouseEnter={() => handleBtnEnter(3)} onMouseLeave={handleBtnLeave} >
                <RoundedDiv content={
                    <div className='home-btn'>
                        <h3>contactMe</h3>
                        <FontAwesomeIcon icon={faPhone} />
                    </div>
                } startVal={-2} activeBtn={activeBtn} btnVal={3} />
            </div>

        </div>
    )
}

export default HomeButtons