import React from "react";
import axios from "axios";
import SearchInput from "./components/SearchInput";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

class App extends React.Component {
  state = { term: "", items: [], selectedVideo: null };

  onSearchInput = async (value) => {
    console.log(value);
    this.setState({ term: value });

    const res = await axios.get(`/api/youtube/videos/${value}`);
    console.log(res);

    const data = await res.data;
    console.log(data);

    const items = await data.items;
    console.log(items);

    this.setState({ items: items });
    console.log("this.state.items: ", this.state.items);
  };

  onSelectedVideo = (video) => {
    console.log("Selected Video : ", video);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div>
        <SearchInput onSubmit={this.onSearchInput} />
        {this.state.selectedVideo && (
          <VideoDetail selectedVideo={this.state.selectedVideo} />
        )}
        <VideoList
          videos={this.state.items}
          onSelectedVideo={this.onSelectedVideo}
        />
      </div>
    );
  }
}

export default App;
