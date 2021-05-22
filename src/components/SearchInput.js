import React from 'react';

class SearchInput extends React.Component {
    state = {searchValue: ''};

    getSearchValue = e => {
        e.preventDefault();

        this.props.onSubmit(this.state.searchValue);
    };

    render() {
        return (
            <div className="mt-4">
                <form onSubmit={ this.getSearchValue }>
                    <div className="input-group mb-3">
                        <input type="text" onChange={ e => this.setState({ searchValue: e.target.value }) } className="form-control" placeholder="Search..." value={ this.state.searchValue } />
                        <div className="input-group-append">
                            <button className="btn btn-primary">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchInput;