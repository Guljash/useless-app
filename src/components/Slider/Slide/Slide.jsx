import React from 'react';
import styles from './Slide.module.css'


const Slide = (props) => {

    return (
        <div style={{left: props.move + '%'}} className={styles.slide}>
            <div className={styles.one}>Powered by</div>
            <div className={styles.two}>Bootstrap</div>
            <div className={styles.three}>React.js</div>
        </div>
    )
}

export default Slide;