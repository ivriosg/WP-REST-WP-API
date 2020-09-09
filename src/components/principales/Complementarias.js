import React, { Component } from "react";
import axios from "axios";
import Complementaria from "./Complementaria.js";

export class Complementarias extends Component {
  constructor() {
    super();
    this.state = {
      principales: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://24-horas.mx/wp-json/wp/v2/posts/?per_page=4")
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
      <div className="">
          {principales.map((principal) => (
            <Complementaria key={principal.id} principal={principal} />
          ))}
      </div>
    );
  }
}

export default Complementarias;
