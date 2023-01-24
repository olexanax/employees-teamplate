import './app-info.css';

const AppInfo = ({increased, total}) => {
    return (
        <div className="app-info">
            <h1>Облік працівників в компанії</h1>
            <h2>Загальна кількість працівників: {total}</h2>
            <h3>премію отримають: {increased}</h3>
        </div>
    )
}

export default AppInfo;