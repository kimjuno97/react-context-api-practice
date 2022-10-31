import { createContext, useState } from 'react';

const UseCount = createContext({
	count: 0,
	plus: () => {},
});

const CountProvider = ({ children }) => {
	const [count, setCount] = useState(1);
	const plus = () => {
		setCount(prev => prev + 1);
	};

	return (
		<UseCount.Provider value={{ count, plus }}>{children}</UseCount.Provider>
	);
};

export { CountProvider, UseCount };
