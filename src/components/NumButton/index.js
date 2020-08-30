import React from 'react';

import styles from './NumButton.module.css';

const NumButton = ({ num, click }) => {
	return (
		<button
			onClick={click}
			className={styles.NumButton}
			style={num === 0 ? { gridColumnEnd: 'span 3' } : null}
		>
			{num}
		</button>
	);
};

export default NumButton;
