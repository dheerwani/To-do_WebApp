import react,{Component} from 'react'
import moment from 'moment'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import TodoDataService from '../../api/To-do/TodoDataService.js'
import AuthenticateService from './AuthenticateService.js'
class TodoComponenet extends Component {

    constructor(props){
        super(props)
        this.state = {
            id : this.props.match.params.id,
            description : '',
            targetDate : moment(new Date()).format('YYYY-MM-DD')
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    onSubmit(values){
        // console.log(values)
        
        let username = AuthenticateService.getLoggedInUsername()
        let todo = {
            id: this.state.id,
            description: values.description,
            targetDate : values.targetDate
        }
        if(this.state.id === -1)
        {
            TodoDataService.createTodo(username,todo)
            .then(() => {this.props.history.push('/todos')})
        }
        else
        {
        TodoDataService.updateTodo(username,this.state.id,todo)
        .then(() => {this.props.history.push('/todos')})
    }
    }

    componentDidMount(){

        if(this.state.id === -1)
            return

        let username = AuthenticateService.getLoggedInUsername();
        TodoDataService.retrieveTodo(username,this.state.id)
        .then (response => this.setState({
            description : response.data.description,
            targetDate : moment(response.data.targetDate).format('YYYY-MM-DD')
        }))
    }

    validate(values){
        let errors = {}
        
        if(!values.description){
            errors.description = 'Enter a Description'
        }
        else if(values.description.length<5){
            errors.description = 'Enter at least 5 Characters in the description'
        }

        if(!moment(values.targetDate).isValid())
        {
            errors.targetDate = 'Enter valid date'
        }

        return errors
    }

    render(){
        let {description,targetDate} = this.state
        // let targetDate = this.state.targetDate
        return <div> 
                <h1>Todo</h1>
                <div className="container">
                    <Formik initialValues={{description,targetDate}}
                        onSubmit = {this.onSubmit}
                        validateOnBlur ={false} 
                        validateOnChange = {false}
                        validate = {this.validate}
                        enableReinitialize = {true}

                        >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description"  component="div" className="alert alert-warning" />
                                    <ErrorMessage name="targetDate"  component="div" className="alert alert-warning" />
                                    <fieldset className = "form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description"/>
                                    </fieldset>
                                    <fieldset className = "form-group">
                                        <label>Target Date</label>
                                        <Field className="form-control" type="date" name="targetDate"/>
                                    </fieldset>
                                    <button className="btn btn-success" type="submit"> Save </button>
                                </Form>
                                
                            )
                        }
                    </Formik>
                </div>
            </div>
    }
}

export default TodoComponenet