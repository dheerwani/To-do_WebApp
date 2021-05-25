import react,{ Component } from "react";

class TodoApp extends Component
{
    render() {
        return(
            <div className="TodoApp">
                <LoginComponent/>

            </div>
        )
    }
}

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
            console.log('success')
            this.setState({
                loginFailed : false,
                loginSuccess :true
            })
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
                <ShowvalidCred loginSuccess={this.state.loginSuccess}/>
                <ShowInvalidCred loginFailed={this.state.loginFailed}/>
                Username : <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password : <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button onClick={this.loginChanged}> Login </button>
            </div>
        )
    }
}

    function ShowInvalidCred(props)
    {
        if(props.loginFailed)
        {
            return <div> Login Failed</div> 
        }
        else
        {
            return null
        }
    }
    
    function ShowvalidCred(props)
    {
        if(props.loginSuccess)
        {
            return <div> Login Succes</div> 
        }
        else
        {
            return null
        }
    }
export default TodoApp