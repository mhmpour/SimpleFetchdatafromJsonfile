import logo from './logo.svg';
import './App.css';
//import Button from 'Button/Button'
import List from './List/list'

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <List/>
        </header>
      </div>
  );
}

export default App;

