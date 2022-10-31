import React from 'react';
import Button from './Button';
import { CountProvider } from './Context';
import Coubnt from './Coubnt';

export default function App() {
	return (
		<CountProvider>
			최상위입니다
			<Coubnt />
			<div>hello world</div>
			<Button />
		</CountProvider>
	);
}
