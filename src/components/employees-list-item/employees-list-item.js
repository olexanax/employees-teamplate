import {Component} from 'react'

import { render } from '@testing-library/react'
import './employees-list-item.css'

class EmployeesListItem extends Component{
     constructor(props){
        super(props)
        this.state = {
            increase: this.props.increase,
            like: false
        }
     }
     addIncrease = () => {
        this.setState(({increase})=>({
            increase: !increase
        }))
     }
     addLike = () => {
        this.setState(({like})=>({
            like: !like
        }))
 }
     render(){
        let className = "list-group-item d-flex justify-content-between";
        if(this.state.increase){
            className += ' increase'
        }
        if(this.state.like){
            className += ' like'
        }
        return (
            <li className= {className}>
                <span onClick = {this.addLike} className="list-group-item-label">{this.props.name}</span>
                <input type="text" className="list-group-item-input" defaultValue={this.props.salary+'$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button onClick = {this.addIncrease} type="button"
                        className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button" onClick = {this.props.onDelete}
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }

}


// } ({name, salary, increase}) => {

//     let classNames = "list-group-item d-flex justify-content-between"
//     if(increase){
//         classNames += ' increase'
//     }

    // render(){
    //     return (
    //         <li className= {classNames}>
    //             <span className="list-group-item-label">{name}</span>
    //             <input type="text" className="list-group-item-input" defaultValue={salary+'$'}/>
    //             <div className='d-flex justify-content-center align-items-center'>
    //                 <button type="button"
    //                     className="btn-cookie btn-sm ">
    //                     <i className="fas fa-cookie"></i>
    //                 </button>

    //                 <button type="button"
    //                         className="btn-trash btn-sm ">
    //                     <i className="fas fa-trash"></i>
    //                 </button>
    //                 <i className="fas fa-star"></i>
    //             </div>
    //         </li>
    //     )
    // }
// }


export default EmployeesListItem;