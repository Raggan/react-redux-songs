import React, { Component } from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";

class App extends Component {
  render() {
    return (
      <div>
        App
        <SongList />
        <SongDetail />
      </div>
    );
  }
}

export default App;
