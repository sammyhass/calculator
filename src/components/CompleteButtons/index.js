import React from 'react';
import ClearButton from '../ClearButton';
import EqualsButton from '../EqualsButton';

import styles from './CompleteButtons.module.css';

const CompleteButtons = ({ onClearClick, onEqualsClick }) => {
	return (
		<div className={styles.CompleteButtons}>
			<ClearButton click={onClearClick} />
			<EqualsButton click={onEqualsClick} />
		</div>
	);
};

export default CompleteButtons;
