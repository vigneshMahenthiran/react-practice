import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      {/* <Greet name= "vignesh">
        <p>this is children props</p>
      </Greet>
      <Greet name= "ak"/>
      <Welcome name ="ak"/> */} 
      {/* <Message/> */}
      <Counter/>
    </div>
  );
}

export default App;
