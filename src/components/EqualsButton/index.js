import React from 'react';

import styles from './EqualsButton.module.css';

const EqualsButton = ({ click }) => {
	return (
		<button className={styles.EqualsButton} onClick={click}>
			=
		</button>
	);
};

export default EqualsButton;
