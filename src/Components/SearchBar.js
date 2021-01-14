import React from 'react';
import '../searchbar.css';
class Searchbar extends React.Component {
    state = { term: '' }
    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }
    render() {
        return (
            <div>
                <form className="search-form" onSubmit={this.onFormSubmit}>
                    <label>Enter a City name</label>
                    <input value={this.state.term} type="text" onChange={this.onInputChange} />
                </form>
            </div>
        )
    }
}

export default Searchbar;