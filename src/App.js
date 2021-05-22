import logo from './logo.svg';
import './App.css';
import FirstComponent , {SecondComponent} from './components/learning-examples/FirstComponent'
import { Component } from 'react';
import ThirdComponent from './components/learning-examples/ThirdComponent'
import FourthComponent from './components/learning-examples/FourthComponent'
function App() {
  return (
    <div className="App">
      My hello world
      <FirstComponent/> 
      <SecondComponent/>
      <ThirdComponent></ThirdComponent>
      <FourthComponent/>
    </div>
  );
}


export default App;
