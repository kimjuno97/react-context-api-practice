import React, { useContext } from 'react';
import { CustomProvider, StyleContext } from './Context';
import Sub1 from './Sub1';
import Sub2 from './Sub2';
import Sub3 from './Sub3';

export default function App() {
	const { style } = useContext(StyleContext);
	console.log('작동 안하는 위치', style);
	return (
		<CustomProvider>
			<div
				style={{
					...style,
					width: '100%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
				}}>
				App
				<Sub1 />
				<Sub2 />
				<Sub3 />
			</div>
		</CustomProvider>
	);
}
