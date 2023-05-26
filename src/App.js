import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/message';
import Counter from './components/Counter';
import ParentComponent from './components/ParentComponent';
import UserGreetings from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';

function App() {
  return (
    <div className="App">
      <Inline/>
      {/* <Stylesheet/> */}
      {/* <NameList/> */}
      {/* <Greet name= "vignesh">
        <p>this is children props</p>
      </Greet>
      <Greet name= "ak"/>
      <Welcome name ="ak"/> */} 
      {/* <Message/> */}
      {/* <Counter/> */}
      {/* <ParentComponent/> */}
      {/* <UserGreetings/> */}
    </div>
  );
}

export default App;
