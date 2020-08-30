import React from 'react';

import styles from './OpButton.module.css';

const OpButton = ({ op, click }) => {
	return (
		<button className={styles.OpButton} onClick={click}>
			{op}
		</button>
	);
};

export default OpButton;
