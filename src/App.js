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
import Form from './components/Form';
import FragementDemo from './components/FragmentDemo';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import Input from './components/Input';
import FocusInput from './components/FocusInput';
import FRParent from './components/FRParent';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Hero name="batman" />
        <Hero name="joker" />
      </ErrorBoundary>
      {/* <Hero name="batman" />
      <Hero name="joker" /> */}

      {/* <PortalDemo/> */}
      {/* <FRParent/> */}
      {/* <FocusInput/> */}
      {/* <Input/> */}
      {/* <RefsDemo/> */}
      {/* <ParentComp/> */}
      {/* <FragementDemo/> */}
      {/* <Form/> */}
      {/* <Inline/> */}
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
