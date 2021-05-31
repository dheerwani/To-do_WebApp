import react,{ Component } from "react";
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom'
import AuthenticationService from './AuthenticateService.js'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
class TodoApp extends Component
{
    render() {
        return(
            <div className="TodoApp">
                <Router>
                    <>
                    <HeaderComponent/>
                    <Switch>
                    <Route path="/" exact component={LoginComponent}/>
                    <Route path="/login" component={LoginComponent}/>
                    <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                    <AuthenticatedRoute path="/todos" component={ListTodosComponent}/>
                    <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                    <Route component={ErrorComponent}/>
                    </Switch>
                    <FooterComponent/>
                    </>
                </Router>
                {/* <LoginComponent/> */}

            </div>
        )
    }
}

class HeaderComponent extends Component{
    render(){
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        console.log(isUserLoggedIn)
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://www.google.com" className="navbar-brand">Dheer Wani</a></div>
                    <ul className="navbar-nav">
                         {isUserLoggedIn && <li> <Link className="nav-link" to="/welcome/dheerwani">Home</Link></li>}
                         {isUserLoggedIn && <li> <Link className="nav-link" to="/todos">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li> <Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li> <Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        
        )
    }
}

class FooterComponent extends Component{
    render(){
        return (
            <footer className="footer">
                <span className="text-muted"> All rights are Reserved with Dheer</span>
            </footer>
        )
    }
}

class LogoutComponent extends Component{
    render(){
        return (
            <>
                <h1>You are Logged out</h1>
                <div className="container">
                    Thankyou for using our application
                </div> 
            </>
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


class ListTodosComponent extends Component {

    constructor(props)
    {
        super(props)
        this.state ={
            todos : 
            [
            { id : 1 , description :'Learning react' , done :false , targetDate: new Date()},
            { id : 2 , description :'Learning spring',done :false , targetDate: new Date()},
            { id : 3 , description :'Learning making project',done :false , targetDate: new Date()}
            ]
        }
    }

    render(){
        return (
            <div>
                <h1>List Todos</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Is Completed</th>
                                <th>Taget Date</th>
                            </tr>
                        </thead>
                    <tbody>
                    {
                        this.state.todos.map( 
                            todo => 
                            <tr key={todo.id}>
                                {/* <td>{todo.id}</td> */}
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toString()}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}


class WelcomeComponent extends Component {
    render(){
        return( 
        <>
        <h1>Welcome</h1>
        <div className="container">
            Welcome {this.props.match.params.name} . You can manage your Todos <Link to="/todos"> here</Link>
        </div>
        </>
        )
    }
}

function ErrorComponent()
{
    return <div>Error 404 Contact Support !!</div>
}
    // function ShowInvalidCred(props)
    // {
    //     if(props.loginFailed)
    //     {
    //         return <div> Login Failed</div> 
    //     }
    //     else
    //     {
    //         return null
    //     }
    // }
    
    // function ShowvalidCred(props)
    // {
    //     if(props.loginSuccess)
    //     {
    //         return <div> Login Succes</div> 
    //     }
    //     else
    //     {
    //         return null
    //     }
    // }
export default TodoApp