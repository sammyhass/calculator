import React from 'react';

import styles from './NumButton.module.css';

const NumButton = ({ num, click }) => {
	return (
		<button onClick={click} className={styles.NumButton}>
			{num}
		</button>
	);
};

export default NumButton;
