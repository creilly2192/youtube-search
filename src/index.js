import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDTQly8Q1oTzHu-QsACDXmjQrrCTrELLII';



// Create a new component. This component should produce // some HTML
class App extends Component {
  constructor(props) {
    super(props);

    //set initial state to search for surfboards
    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('reactjs');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <div className="container">
          <VideoDetail video={this.state.selectedVideo}/>
          <VideoList
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos}/>
        </div>
      </div>
    );
  }
}
// Take this component's generated HTML and put it on the // page (DOM)
ReactDOM.render(<App />, document.querySelector('.body'));
