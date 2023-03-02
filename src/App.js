import logo from './logo.svg';
import './App.css';
import HomeComponent from './Components/HomeComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <HomeComponent/>
      </header>
    </div>
  );
}

export default App;
