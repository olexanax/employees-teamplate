import { Component } from 'react';
import React from "react";
import nextId from "react-id-generator";

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import Employeeslist from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';


import './app.css';


class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            data : [{name:'alex bugatti', salary:1000, increase:false, id:1},
                    {name:'ihor', salary:10, increase: false, id:2},
                    {name:'mike tyson', salary:6666, increase: false, id:3},
            ],
        }
        // this.maxId = 4
    }

    deleteItem = (id)=> {
        this.setState({
            data: this.state.data.filter(item => item.id !== id)
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            id: nextId()
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    render(){
        return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
                <Employeeslist 
                    data={this.state.data}
                    onDelete = {this.deleteItem} />
            </div>
            <EmployeesAddForm onAdd = {this.addItem}/>
        </div>)
    }
    
}



export default App