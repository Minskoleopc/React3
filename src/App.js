import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import MyComponentClass from './components/MyComponentClass';
import MyFr from './components/MyFr';
import MyCr from './components/MyCr';
import ComponentJSX from './components/ComponentJSX';
import Greet from './components/Greet';
import JsxR from './components/JsxR';
import PropRF from './components/PropRF';
import PropC from './components/PropC';
import Message from './components/Message';
import Counter from './components/Counter';
import Counter2 from './components/Counter2';
import Greet4 from './components/Greet4';
import EventBind from './components/EventBind';
import EventBindR from './components/EventBindR';
// import ParentC from './components/ParentC';
import Parentpr from './components/Parentpr';
import UserGreeting from './components/UserGreeting';

function App() {
  return (
    <div className="App">

     <UserGreeting></UserGreeting>
      {/* <Parentpr></Parentpr> */}
      {/* <ParentC></ParentC> */}
      {/* <EventBindR></EventBindR> */}
      {/* <Greet4 name = "chinmay" lastName = "deshpande"></Greet4> */}
      {/* <EventBind></EventBind> */}
      {/* <Counter2></Counter2>  */}
      {/* // <Message></Message>
    // <Counter></Counter> */}





      {/* <MyComponent/>
    <MyComponentClass/>
    <MyFr/>
    <MyCr/>
    <ComponentJSX/>
    <Greet name = "chinmay" lastName = "deshpande"></Greet>
    <Greet name = "shirish" lastName = "dani"></Greet>
    <Greet name = "ram" lastName = "joshi"></Greet> */}
      {/* <JsxR />
      <PropRF name="chinmay" lastName = "deshpande">
        <p>This is the children element</p>
      </PropRF>
      <PropRF name="sarika" lastName = "pansare"></PropRF>
      <PropRF name="ram" lastName = "dani"></PropRF>
      <PropC firstName ="poorva" lastName = "vyas"></PropC> */}

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
