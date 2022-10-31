import React, { useContext } from 'react';
import { StyleContext } from './Context';

export default function Sub1() {
	const { style, doCostom } = useContext(StyleContext);

	const blueStyle = {
		border: '10px solid blue',
		margin: '10px',
		padding: '10px',
	};
	return (
		<div style={style}>
			<button onClick={() => doCostom(blueStyle)}>파랑</button>
		</div>
	);
}
