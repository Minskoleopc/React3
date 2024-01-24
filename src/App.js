import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import MyComponentClass from './components/MyComponentClass';
import MyFr from './components/MyFr';
import MyCr from './components/MyCr';
import ComponentJSX from './components/ComponentJSX';
import Greet from './components/Greet';
function App() {
  return (
    <div className="App">
    <MyComponent/>
    <MyComponentClass/>
    <MyFr/>
    <MyCr/>
    <ComponentJSX/>
    <Greet name = "chinmay" lastName = "deshpande"></Greet>
    <Greet name = "shirish" lastName = "dani"></Greet>
    <Greet name = "ram" lastName = "joshi"></Greet>
    
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React in Minskole
        </a>
      </header> */}
    </div>
  );
}

export default App;
