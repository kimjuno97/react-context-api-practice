import React, { useContext } from 'react';
import { UseCount } from './Context';

export default function Coubnt() {
	const { count } = useContext(UseCount);

	return (
		<div>
			Coubnt 부분입니다
			<div>{count}</div>
		</div>
	);
}
