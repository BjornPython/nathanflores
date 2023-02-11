import React from 'react'
import "../css/roundedDiv.css"
import { useState, useEffect } from 'react';
function RoundedDiv({ content, startVal = 0, activeBtn, btnVal }) {

    const [y, setY] = useState(startVal);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        if (activeBtn !== 0) {
            setY(-5);
        }

        if (activeBtn !== btnVal) {
            setY(5);
            return
        }

        const intervalId = setInterval(() => {
            setY(y => y + direction);

            if (y >= 8) {
                setDirection(-1);
            } else if (y <= -8) {
                setDirection(1);
            }
        });

        return () => clearInterval(intervalId);
    }, [y, activeBtn]);

    const floatingStyles = {
        transform: `translate(0, ${y}px)`,
        transition: 'transform 0.5s ease-in-out',
    };

    return (
        <div className='rounded-div' >
            <div className="div-front" style={{ ...floatingStyles }}>
                {content}
            </div>

            <div className="div-back" style={{ ...floatingStyles }}>

            </div>
        </div>
    )
}

export default RoundedDiv