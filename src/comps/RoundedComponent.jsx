import React from 'react'
import "../css/roundedComp.css"
function RoundedComponent({ content, frontCompClass, backCompClass }) {
    return (
        <div className='rounded-comp'>
            <div className={`front-comp ${frontCompClass}`}>
                {content}
            </div>
            <div className={`back-comp ${backCompClass}`}>

            </div>
        </div>
    )
}

export default RoundedComponent