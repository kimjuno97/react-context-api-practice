import { CountProvider } from './Context';
import CountLabel from './CountLabel';
import AddCount from './AddCount';

function App() {
	return (
		<CountProvider>
			<CountLabel />
			<AddCount />
		</CountProvider>
	);
}

export default App;
