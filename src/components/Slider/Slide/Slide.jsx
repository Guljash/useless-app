import React from 'react';
import arrow from './arrow.svg'

const Slide = (props) => {
    return (
        <div className="slide">
            <img onClick={props.prev} className="prev" src={arrow} alt="prev"/>
            {props.val}
            <img onClick={props.next} className="next" src={arrow} alt="next"/>  
        </div>
    )
}

export default Slide;