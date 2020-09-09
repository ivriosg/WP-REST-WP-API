import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export class PrincipalPost extends Component {
  state = {
    imgUrl: "",
    author: ""
  };

  static propTypes = {
    principal: PropTypes.object.isRequired,
  };
  componentDidMount() {
    const { featured_media, author } = this.props.principal;
    const getImageUrl = axios.get(
      `https://24-horas.mx/wp-json/wp/v2/media/${featured_media}`
    );
    const getAuthor = axios.get(
      `https://24-horas.mx/wp-json/wp/v2/users/${author}`
    );

    Promise.all([getImageUrl, getAuthor]).then((res) => {
      this.setState({
        imgUrl: res[0].data.media_details.sizes.full.source_url,
        author: res[1].data.name,
        isLoaded: true,
      });
    });
  }

  render() {
    const { title, excerpt, date } = this.props.principal;
    const { author, imgUrl } = this.state;
    return (
      <div className="post__principal full__border box__shadow">
        <img className="post__image border__top img-fluid" src={imgUrl} alt={title.rendered} />
        <div className="post__content">
          <h2 className="post__title">{title.rendered}</h2>
          <div className="post__excerpt" dangerouslySetInnerHTML={{ __html: excerpt.rendered }}></div>
          <span className="post__metadata">POR: {author} - {date}</span>
        </div>
      </div>
    );
  }
}
export default PrincipalPost;
