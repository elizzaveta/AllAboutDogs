import React from 'react';
import styles from "../styles/css/components/DividerLine.module.css"

const DividerLine = (props) => {
    const {marginBottom} = props;
    console.log(marginBottom)
    return (
        <div className={styles.line} style={{marginBottom: {marginBottom}}}></div>
    );
};

export default DividerLine;