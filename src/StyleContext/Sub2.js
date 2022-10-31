import React, { useContext } from 'react';
import { StyleContext } from './Context';

export default function Sub2() {
	const { style, doCostom } = useContext(StyleContext);
	const redStyle = {
		border: '10px solid red',
		margin: '20px',
		padding: '20px',
	};
	return (
		<div style={style}>
			<button onClick={() => doCostom(redStyle)}>레드</button>
		</div>
	);
}
