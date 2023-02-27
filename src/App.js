import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';

const AppLayout = () => {
	return (
		<>
			<Header />
			<Body />
			<Footer />
		</>
	);
};

function App() {
	return (
		<div>
			<AppLayout />
		</div>
	);
}

export default App;
