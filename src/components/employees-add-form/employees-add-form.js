import { Component } from 'react';
import './employees-add-form.css'

class EmployeesAddForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            salary: ''
        }

    }

    onValueChange = (e) => {
        // console.log(this.state)
        this.setState(() => {
            return {[e.target.name] : e.target.value}
          })
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(+this.state.salary)
        if(this.state.name.length > 1 && +this.state.salary !== 0){
            this.props.onAdd(this.state.name, this.state.salary);
            this.setState({
                name: '',
                salary: ''
            })
        }       
    }

    render (){
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form 
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text" 
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" onChange={this.onValueChange} 
                        name = 'name' 
                        value = {this.state.name}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" onChange={this.onValueChange} 
                        name = 'salary' 
                        value = {this.state.salary}/>    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;