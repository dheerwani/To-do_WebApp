import React,{Component} from 'react'
import './Counter.css'
import PropTypes from 'prop-types'

class Counter extends Component {
  
  constructor() {
    super();
    this.state = {
        counter : 0 // shows overall counter
    }

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
}
  
  render(){
    return (
        <div className="Counter">
          <CounterButton by={100} incrementMethod={this.increment} decrementMethod={this.decrement}/>
          <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
          <CounterButton by={2} incrementMethod={this.increment} decrementMethod={this.decrement}/>
          <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
          <span className="count">{this.state.counter}</span>
          <div><button className="reset" onClick={this.reset}>reset</button></div>
        </div>
      );
    }

    reset(){
      this.setState(
        () => {
          return {counter : 0}
        }
      )
    }

    increment(by){
      // console.log(`from parent - ${by}`)
      // this.state.counter++;
      this.setState(
      (prevState) => {
          return {counter : prevState.counter  + by }
      }
      );
      }

      decrement(by){
      
        this.setState(
        (prevState) => {
            return {counter : prevState.counter  - by }
        }
        );
        }
}

class CounterButton extends Component {

    constructor() {
        super();
        // this.state = {
        //     counter : 0 // shows counter for specific classbutton component
        // }
        
        // this.increment = this.increment.bind(this);
        // this.decrement = this.decrement.bind(this);
    }
    // checking token
    render() {
    return (
      <div className="CounterButton">
        <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
        <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
        {/* <span className="count">{this.state.counter}</span> moved state from child to parent*/} 
        
      </div>
    );
    }

  //       increment(){
  //       // console.log('increment')
  //       // this.state.counter++;
  //       // this.setState({
  //       //     counter : this.state.counter + this.props.by 
  //       // });

  //       this.props.incrementMethod(this.props.by);
  //       }

  //       decrement(){
  //         this.props.decrementMethod(this.props.by);
  //       }
  }

  CounterButton.defaultProps = {
      by : 1
  }

  CounterButton.propTypes = {
      by : PropTypes.number
  }

  export default Counter
//   function increment(){
//       console.log('increment')
//   }