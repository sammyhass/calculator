import React from 'react';

import styles from './ClearButton.module.css';

const ClearButton = ({ click }) => {
	return (
		<button className={styles.ClearButton} onClick={click}>
			C
		</button>
	);
};

export default ClearButton;
