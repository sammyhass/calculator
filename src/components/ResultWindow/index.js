import React from 'react';

import styles from './ResultWindow.module.css';

const ResultWindow = ({ result }) => {
	return <div className={styles.ResultWindow}>{result}</div>;
};

export default ResultWindow;
