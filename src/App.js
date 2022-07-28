import './App.css';
import Contact from './components/Contact';
import Container from './components/Container';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Summary from './components/Summary';

function App() {
  return (
    <>
      <Header />
      <Container>
        <Summary />
        <Skills />
        <Projects />
        <Contact />
      </Container>
    </>
  );
}

export default App;
