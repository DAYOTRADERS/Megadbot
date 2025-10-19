import React from 'react';
import styles from './aitool.module.scss'; // assuming you renamed it correctly

const Aitool = () => {
    return (
        <div className={styles.container}>
            <iframe
                src="https://peaceful-kashata-8e8e24.netlify.app/"
                title="DollarPrinters Analysis"
                className={styles.iframe}
                allowFullScreen
            />
        </div>
    );
};

export default Aitool;
