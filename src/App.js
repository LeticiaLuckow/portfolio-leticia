import './App.css';
import Contact from './components/Contact';
import Container from './components/Container';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Summary from './components/Summary';

function App() {
  return (
    <div style={{ background: '#222222' }}>
      <Header />

      <Container>
        <Summary />
        <Skills />
        <Projects />
      </Container>
      <Contact />
      <div
        style={{
          color: 'white',
          padding: '12px',
          background: '#222',
          textAlign: 'center',
        }}
      >
        <span>Todos os direitos reservados, © 2022 Letícia Luckow.</span>
      </div>
    </div>
  );
}

export default App;
