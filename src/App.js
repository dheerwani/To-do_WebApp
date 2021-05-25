// import logo from './logo.svg';
import './App.css';
import FirstComponent , {SecondComponent} from './components/learning-examples/FirstComponent'
// import { Component } from 'react';
import ThirdComponent from './components/learning-examples/ThirdComponent'
import FourthComponent from './components/learning-examples/FourthComponent'
import Counter from './components/counter/Counter'
import TodoApp from './components/to-do/TodoApp'

function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      <TodoApp/>
    </div>
  );
}

function LearningComponent() {
  return (
    <div className="LearningComponent">
      My hello world
      <FirstComponent/> 
      <SecondComponent/>
      <ThirdComponent></ThirdComponent>
      <FourthComponent/>
    </div>
  );
}

export default App;
