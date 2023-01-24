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
            data : [{name:'alex bugatti', salary:1000, increase:false, rise:true, id:nextId('')},
                    {name:'ihor', salary:10, increase: false, rise:false, id:nextId()},
                    {name:'mike tyson', salary:6666, increase: false, rise:false, id:nextId()},
            ],
        }
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
            rise: false,
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

    onToggleProp = (id, prop) => {
        this.setState(({data})=>({
            data: data.map(item=>{
                if(item.id === id){
                    item = {...item, [prop]: !item[prop]}
                }
            return item
            })
        }))
    }

    render(){
        return (
        <div className="app">
            <AppInfo total = {this.state.data.length}
                     increased = {this.state.data.filter(item=>item.increase).length}/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
                <Employeeslist 
                    data={this.state.data}
                    onDelete = {this.deleteItem}
                    onToggleProp = {this.onToggleProp}/>
            </div>
            <EmployeesAddForm onAdd = {this.addItem}/>
        </div>)
    }
    
}



export default App