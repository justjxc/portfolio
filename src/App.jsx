import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<>
			<Header />

			<main>
				<Hero />

				<Projects />
			</main>

			<Footer />
		</>
	);
}

export default App;
