import React from 'react';

import styles from './NumButtonList.module.css';
import NumButton from '../NumButton';

const NumButtonList = ({ buttonClick }) => {
	const NUMS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
	const renderedButtons = NUMS.map(num => (
		<NumButton key={num} click={() => buttonClick(num)} num={num} />
	));
	return <div className={styles.NumButtonList}>{renderedButtons}</div>;
};

export default NumButtonList;
