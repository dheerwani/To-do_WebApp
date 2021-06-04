import React,{Component} from 'react'
import AuthenticationService from './AuthenticateService.js'

class LoginComponent extends Component
{
    constructor(props)
    {
        super(props)

        this.state={
            username : 'dheerwani',
            password : '',
            loginSuccess : false,
            loginFailed : false
        }

        // this.handleUsername = this.handleUsername.bind(this)
        // this.handlePassword = this.handlePassword.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginChanged = this.loginChanged.bind(this)
    }

    handleChange(event){
        // console.log(this.state);
        this.setState(
            {
                [event.target.name] : event.target.value
            }
        )
    }
    // handleUsername(event){
    //     // console.log(event.target.value);
    //     this.setState(
    //         {
    //             username : event.target.value
    //         }
    //     )
    // }

    // handlePassword(event){
    //     this.setState(
    //         {
    //             password : event.target.value
    //         }
    //     )
    // }

    loginChanged()
    {
        if(this.state.username === 'dheerwani' && this.state.password === '12345')
        {
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`)
            // this.setState({
            //     loginFailed : false,
            //     loginSuccess :true
            // })
        }
        else
        {
            console.log('failed')
            this.setState({
                loginFailed : true,
                loginSuccess :false
            })
        }
    }
    render() {
        return(
            <div>
                <h1>Login</h1>
                <div className="container">
                {/* <ShowvalidCred loginSuccess={this.state.loginSuccess}/> */}
                {/* <ShowInvalidCred loginFailed={this.state.loginFailed}/> */}
                { this.state.loginSuccess && <div> Login Succes</div> }
                { this.state.loginFailed && <div className="alert alert-warning">Invalid Credentials</div> }
                Username : <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password : <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button className="btn btn-success" onClick={this.loginChanged} > Login </button>
                </div>
            </div>
        )
    }
}

export default LoginComponent