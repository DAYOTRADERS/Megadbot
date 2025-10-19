import React from 'react';
import styles from './neph.module.scss';

const Neph: React.FC = () => {
    return (
        <div className={styles.container}>
            <iframe
                src="https://lustrous-panda-294718.netlify.app/"
                title="Neph"
                className={styles.iframe}
                loading="lazy"
            />
        </div>
    );
};

export default Neph;
