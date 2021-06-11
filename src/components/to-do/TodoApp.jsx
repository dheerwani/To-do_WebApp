import { Component } from "react";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
// import AuthenticationService from './AuthenticateService.js'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from'./LoginComponent.jsx'
import ListTodosComponent from './ListTodosComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import TodoComponent from './TodoComponent.jsx'
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
                    <AuthenticatedRoute path="/todos/:id" component={TodoComponent}/>
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