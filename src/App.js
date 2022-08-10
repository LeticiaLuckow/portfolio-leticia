import './App.css';
import Contact from './components/Contact';
import Container from './components/Container';
import Header from './components/Header';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Summary from './components/Summary';
import Top from './components/Top';

function App() {
  return (
    <div style={{ background: '#222222' }}>
      <Header />
      <Profile />
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
      <Top />
    </div>
  );
}

export default App;
