import React, { useContext, useRef } from 'react';
import { UseCount } from './Context';
import './btn.css';

export default function Button() {
	const { plus } = useContext(UseCount);
	const world = useRef(null);

	return (
		<div>
			Button입니다
			<div>
				<button className='btn' ref={world} onClick={plus}>
					버튼
				</button>
			</div>
			<div>
				이것은 그냥 버튼입니다
				<button
					onClick={() => {
						world.current.focus();
						world.current.click();
					}}>
					그냥 버튼
				</button>
			</div>
		</div>
	);
}
