import React from 'react';
import styles from './tradeveiw.module.scss'; // assuming you renamed it correctly
import Tradeveiw from '../tradeveiw';

const Tradeveiw = () => {
    return (
        <div className={styles.container}>
            <iframe
                src="https://charts.deriv.com/deriv"
                title="DollarPrinters Analysis"
                className={styles.iframe}
                allowFullScreen
            />
        </div>
    );
};

export default Tradeveiw;
