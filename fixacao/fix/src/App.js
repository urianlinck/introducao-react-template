import logo from './logo.png';
import './App.css';

function App() {

  function onClickBotao(){
    alert("Botão foi clicado");
  }

  return (
    <div className="App">
      <h1>Aprenda React na Labenu</h1>
      <div>
          <div>
            <img className="Logo" src={logo} alt="logo"/>
          </div>
          <div>
            <a href="https://labenu.com.br">Site da Labenu</a>
          </div>
          <div>
            <button onClick={onClickBotao}> Clique aqui! </button>
          </div>
        </div>
    </div>
  );
}

export default App;
