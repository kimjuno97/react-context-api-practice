import React, { useContext } from 'react';
import { StyleContext } from './Context';

export default function Sub3() {
	const { style, doCostom } = useContext(StyleContext);
	const greenStyle = {
		border: '10px solid green',
		margin: '15px',
		padding: '20px',
	};
	return (
		<div style={style}>
			<button onClick={() => doCostom(greenStyle)}>green</button>
		</div>
	);
}
