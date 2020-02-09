import React from 'react';

const Input = (props) => {
    return (
        <div className="input-wrapper">
            <span>{props.text}</span>
            <input className={props.s} type="text" />
        </div>
    )
}

export default Input;