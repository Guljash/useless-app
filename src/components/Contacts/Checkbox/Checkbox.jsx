import React from 'react';

const Checkbox = (props) => {
    return (
        <label className="cb-wrapper">
            <input className={props.style} type="checkbox" />
            <div className="checkmark"></div>
            <span>Я даю согласие на обработку персональных данных согласно <span>политике конфиденциальности</span>.</span>
        </label>
    )
}

export default Checkbox;