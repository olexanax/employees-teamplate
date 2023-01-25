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
            data : [{name:'Alex Bugatti', salary:1000, increase:false, rise:true, id:nextId('')},
                    {name:'Volodymyr Zelenskiy', salary:3000, increase: false, rise:false, id:nextId()},
                    {name:'Mike Tyson', salary:6666, increase: false, rise:false, id:nextId()},
            ],
            term: "",
            filter: ''
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

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (value)=>{
        this.setState({term: value})
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render(){
        const{data, term, filter} = this.state
        const visibleData = this.filterPost(this.searchEmp(data, term), filter)
        return (
        <div className="app">
            <AppInfo total = {data.length}
                     increased = {data.filter(item=>item.increase).length}/>
            <div className="search-panel">
                <SearchPanel onUpdateSearch = {this.onUpdateSearch}/>
                <AppFilter onFilterSelect = {this.onFilterSelect}
                           filter = {filter}/>
                <Employeeslist 
                    data={visibleData}
                    onDelete = {this.deleteItem}
                    onToggleProp = {this.onToggleProp}/>
            </div>
            <EmployeesAddForm onAdd = {this.addItem}/>
        </div>)
    }
    
}



export default App