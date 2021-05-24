import React,{Component} from 'react'
import './Counter.css'
import PropTypes from 'prop-types'

class Counter extends Component {
    render(){
    return (
        <div className="Counter">
          <CounterButton by={1}/>
          <CounterButton by={5}/>
          <CounterButton by={10}/>
        </div>
      );
    }
}

class CounterButton extends Component {

    constructor() {
        super();
        this.state = {
            counter : 0
        }

        this.increment = this.increment.bind(this);
    }

    render() {
    return (
      <div className="CounterButton">
        <button onClick={this.increment}>+{this.props.by}</button>
        <span className="count">{this.state.counter}</span>
      </div>
    );
    }

        increment(){
        // console.log('increment')
        // this.state.counter++;
        this.setState({
            counter : this.state.counter + this.props.by 
        }

        );
        }
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