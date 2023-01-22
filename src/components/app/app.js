import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import Employeeslist from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';


import './app.css';


function App(){

    const data = [{name:'alex bugatti', salary:1000, increase:false, id:1},
                  {name:'ihor', salary:10, increase: false, id:2},
                  {name:'mike tyson', salary:6666, increase: false, id:3},
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