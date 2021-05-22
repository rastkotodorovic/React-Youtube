import React from 'react';
import SearchInput from './components/SearchInput';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import youtube from './apis/youtube';

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    };

    componentDidMount() {
        this.getSearchValue('React js');
    };

    getSearchValue = async searchValue => {
        const response = await youtube.get('/search', {
            params: {
                q: searchValue
            }
        });

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    onVideoSelect = video => {
        this.setState({ selectedVideo: video });
    };

    render() {
        return (
            <div className="container">
                <SearchInput onSubmit={ this.getSearchValue } />
                <div className="row">
                    <div className="col">
                        <VideoDetail video={ this.state.selectedVideo } />
                    </div>
                    <div className="col col-lg-3">
                        <VideoList videos={ this.state.videos } onVideoSelect={ this.onVideoSelect } />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
