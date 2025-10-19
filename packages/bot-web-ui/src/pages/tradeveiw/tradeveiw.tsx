import React from 'react';
import styles from './tradeveiw.module.scss'; // assuming you renamed it correctly

const Tradeveiw = () => {
    return (
        <div className={styles.container}>
            <iframe
                src="https://charts.deriv.com/deriv"
                title="Tradeveiw"
                className={styles.iframe}
                allowFullScreen
            />
        </div>
    );
};

export default Tradeveiw;
