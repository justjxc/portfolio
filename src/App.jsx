import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import ToTopButton from './components/ToTopButton/ToTopButton';

function App() {
	return (
		<>
			<Header />

			<main>
				<Hero />

				<Projects />
			</main>

			<Footer />

			<ToTopButton />
		</>
	);
}

export default App;
