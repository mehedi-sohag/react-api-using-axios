import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = {
    images: []
  };
  onChange = (e) => {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          query: e
        },
        headers: {
          Authorization: "Client-ID np1RYRysitpmyUONuONa1W9YYRbZA2wgJRdGshXZ2Vk"
        }
      })
      .then((response) => {
        this.setState({ images: response.data.results });
      })
      .catch((e) => {
        console.log(e.message);
      });
  };
  render() {
    return (
      <div className={"ui container"} style={{ marginTop: "20px" }}>
        <SearchBar onSubmitted={this.onChange} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
