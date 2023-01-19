import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import Employeeslist from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';


import './app.css';


function App(){

    const data = [{name:'alex bugatti', salary:1000, increase:false},
                  {name:'ihor', salary:10, increase:true},
                  {name:'mike tyson', salary:6666, increase:true},
                  ];

    return (<div className="app">
        <AppInfo/>
        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
            <Employeeslist data={data}/>
        </div>
        <EmployeesAddForm/>
    </div>)
}



export default App