import React, { useContext } from 'react';
import { CountContext } from './Context';

function AddCount() {
	const { plusCount } = useContext(CountContext);

	return (
		<h1>
			<button
				onClick={plusCount}
				style={{ display: 'block', margin: '0 auto' }}>
				Add
			</button>
		</h1>
	);
}

export default AddCount;
