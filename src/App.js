import React from 'react';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import VideoListItem from './components/video_list_item';
import { YOUTUBE_API_KEY } from './keys';
//Youtube api key .Also install youtube package dependencies to this project - youtube-api-search
const API_KEY = YOUTUBE_API_KEY;

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      videos:[],
      selectedVideo:null
     };
     this.videoSearch('Game of Thrones');
  }
  // get response from youtube api with console
    videoSearch(term){
      YTSearch({key:API_KEY ,term:term}, (videos) => {
        console.log(videos);
        this.setState({
          videos:videos,
          selectedVideo:videos[0]
        });
      });
    }

  render(){
    return(
     <div>
    <SearchBar onSearchTermChange = {term => this.videoSearch(term)} />
    <VideoDetail video={this.state.selectedVideo}/>
    <VideoList
    onVideoSelect ={selectedVideo => this.setState({selectedVideo})}
     videos={this.state.videos} />
    </div>
  );
}
}

export default App;
