import { Component } from 'react/cjs/react.production.min';
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props){
        super(props)
        this.state = {
            term:''
        }
    }

    onUpdateSearch = (e)=> {
        let term = e.target.value
        this.setState({term})
        this.props.onUpdateSearch(term)
    }

    render(){
        return (
            <input 
                type="text"
                placeholder='search'
                className='form-control search-input'
                value={this.state.term}
                onChange = {this.onUpdateSearch}
            />
        )
    }
}

export default SearchPanel;