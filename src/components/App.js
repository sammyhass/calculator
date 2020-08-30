import React, { useState, useEffect, useRef } from 'react';

import ResultWindow from './ResultWindow';
import ButtonContainer from './ButtonsContainer';

const App = () => {
	const [result, setResult] = useState(0);
	const [stack, setStack] = useState([result]);

	const updateResult = () => {
		// Get last number in stack and show in result
		for (let i = stack.length; i >= 0; i--) {
			if (typeof stack[i] === 'number') {
				setResult(stack[i]);
				return;
			}
		}
	};

	useEffect(updateResult, [stack, result]);

	const equalsInput = () => {
		const strStack = stack.join('');
		const newResult = Math.round(eval(strStack), 0);

		setStack([newResult]);
	};

	const clearInput = () => {
		setStack([0]);
	};

	const numInput = num => {
		let newNum = num;
		let newStack = [...stack];
		if (typeof stack[stack.length - 1] === 'number') {
			newNum = stack[stack.length - 1] * 10 + num;

			newStack.splice(stack.length - 1);
		}
		setStack([...newStack, newNum]);
	};

	const opInput = op => {
		setStack([...stack, op]);
	};

	return (
		<div className="container">
			<ResultWindow result={result} />
			<ButtonContainer
				numButtonClick={numInput}
				clearClick={clearInput}
				opButtonClick={opInput}
				equalsButtonClick={equalsInput}
			/>
		</div>
	);
};

export default App;
