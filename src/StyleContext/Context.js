import { createContext, useState } from 'react';

const StyleContext = createContext({
	style: { border: '', margin: '', padding: '' },
	doCostom: () => {},
});

const CustomProvider = ({ children }) => {
	const [style, setStyle] = useState({
		border: '5px solid black',
		margin: '',
		padding: '',
	});
	console.log(style);
	const doCostom = style => {
		setStyle(style);
	};

	return (
		<StyleContext.Provider value={{ style, doCostom }}>
			{children}
		</StyleContext.Provider>
	);
};

export { StyleContext, CustomProvider };
