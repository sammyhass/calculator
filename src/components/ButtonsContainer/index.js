import React from 'react';
import NumButtonList from '../NumButtonList';
import OpButtonList from '../OpButtonList';
import CompleteButtons from '../CompleteButtons';

import styles from './ButtonsContainer.module.css';

const ButtonsContainer = ({
	numButtonClick,
	clearClick,
	opButtonClick,
	equalsButtonClick,
}) => {
	return (
		<div className={styles.ButtonsContainer}>
			<NumButtonList buttonClick={numButtonClick} />
			<div className={styles.RightButtons}>
				<OpButtonList buttonClick={opButtonClick} />
				<CompleteButtons
					onClearClick={clearClick}
					onEqualsClick={equalsButtonClick}
				/>
			</div>
		</div>
	);
};

export default ButtonsContainer;
