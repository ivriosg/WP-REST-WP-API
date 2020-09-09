import React, { Component } from "react";
import axios from "axios";
import PostItem from './Post.js';

export class Principal extends Component {
  state = {
    principales: []
  };

  componentDidMount() {
    axios
      .get("https://24-horas.mx/wp-json/wp/v2/posts/")
      .then((res) =>
        this.setState({
          principales: res.data
        })
      )
      .catch((err) => console.log(err));
  }

  render() {
    const { principales, isLoaded } = this.state;
    return (
      <div>
          {principales.map(principal =>
          <PostItem key={principal.id} principal={principal}/>
          )}
      </div>
  );

  }
}

export default Principal;
