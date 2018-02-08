import React, { Component } from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyC2__tb4YxMZezJaH3CQU_sw7VgxbN2_dg';

// Create a new component. This component should produce
// some HTML.
class App extends Component {

    constructor(props) {
        super(props);
        this.state = { videos: [], selectedVideo: null };   
        this.youtubeSearch('javascript');
    }

    youtubeSearch(term) {
        YTSearch({
            key: API_KEY,
            term: term,
        }, (videos) => this.setState({
            videos: videos,
            selectedVideo: videos[0] 
        }));
    }

    render() {
        const youtubeSearch = _.debounce(term => this.youtubeSearch(term) , 300);
        return (
            <div>
                <SearchBar onSearchTermChange={term => youtubeSearch(term)} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
                    videos = {this.state.videos} />
            </div>
        );
    }
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
