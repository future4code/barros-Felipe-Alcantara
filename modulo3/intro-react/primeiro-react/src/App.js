import logo from './sol.png';
import './App.css';

function App() {
  
  const evento= () => alert('Boa Noite, Seja Bem vindo!')

  return (
    <div className="App">
      <header className="App-header">
        <h1>Felipe M. Alcântara</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Meu Primeiro projeto React verão 2022! =D </code>
          
        </p>

        <button onClick={evento}>Clique aqui </button>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
