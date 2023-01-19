import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css'


const Employeeslist = ({data}) => {

const elements = data.map((item) => item = <EmployeesListItem name = {item.name} salary= {item.salary} increase={item.increase}/>)
    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default Employeeslist;