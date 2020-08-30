import React from 'react';

import styles from './OpButtonList.module.css';
import OpButton from '../OpButton';

const OpButtonList = ({ buttonClick }) => {
	const OPS = ['+', '-', '/', '*'];
	const renderedButtons = OPS.map(op => (
		<OpButton click={() => buttonClick(op)} op={op} key={op} />
	));
	return <div className={styles.OpButtonList}>{renderedButtons}</div>;
};

export default OpButtonList;
