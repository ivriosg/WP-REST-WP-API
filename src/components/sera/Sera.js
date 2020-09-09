import React, { Component } from "react";
import axios from "axios";
import SinglePost from "./SinglePost.js";

export class Sera extends Component {
  constructor() {
    super();
    this.state = {
      principales: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://24-horas.mx/wp-json/wp/v2/posts/?per_page=1")
      .then((res) =>
        this.setState({
          principales: res.data,
        })
      )
      .catch((err) => console.log(err));
  }

  render() {
    const { principales } = this.state;
    return (
      <div className="sera">
        <h3 className="title__section">¿SERÁ?</h3>
          {principales.map((principal) => (
            <SinglePost key={principal.id} principal={principal} />
          ))}
      </div>
    );
  }
}

export default Sera;
