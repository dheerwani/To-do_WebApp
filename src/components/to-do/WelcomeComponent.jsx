import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import HelloworldService from '../../api/To-do/HelloworldService.js'
// import axios from 'axios'
class WelcomeComponent extends Component {

    constructor(props)
    {
        super(props)
        this.state ={
            welcomeMessage : ''
        }
        this.retrieveMessage = this.retrieveMessage.bind(this)
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.handleError = this.handleError.bind(this)
    }
    render(){
        return( 
        <>
        <h1>Welcome</h1>
        <div className="container">
            Welcome {this.props.match.params.name} . 
            You can manage your Todos <Link to="/todos"> here</Link>
        </div>
        <div className="container">
            Click here to get customized message
            <button onClick ={this.retrieveMessage} className ="btn btn-success">Get welcome message</button>
        </div>
        <div className="container">
            {this.state.welcomeMessage}
        </div>
        </>
        )
    }

    retrieveMessage()
    {
        // console.log('retrieve message');
        // HelloworldService.executeHelloWorldService()
        // .then( response => this.handleSuccessfulResponse(response))

        // HelloworldService.executeHelloWorldBeanService()
        // .then( response => this.handleSuccessfulResponse(response))

        HelloworldService.executeHelloWorldPathBeanService(this.props.match.params.name)
        .then( response => this.handleSuccessfulResponse(response))
        .catch (error => this.handleError(error))
    }

    handleSuccessfulResponse(response)
    {
        console.log(response)
        this.setState({ welcomeMessage : response.data.message })
    }

    handleError(error)
    {
        console.log(error.response)
        this.setState({ welcomeMessage : error.response.data.message })
    }
}

export default WelcomeComponent