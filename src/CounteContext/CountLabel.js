import React, { useContext } from 'react';
import { CountContext } from './Context';

function CountLabel() {
	const { count } = useContext(CountContext);
	return <div style={{ witdh: '100%', textAlign: 'center' }}> {count}</div>;
}

export default CountLabel;
