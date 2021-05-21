import React from 'react';
import SearchInput from './components/SearchInput';

class App extends React.Component {
    getSearchValue = searchValue => {
        console.log(searchValue);
    };

    render() {
        return (
            <div>
                <SearchInput onSubmit={ this.getSearchValue } />
            </div>
        );
    }
}

export default App;
