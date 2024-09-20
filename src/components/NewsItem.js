import React, { Component } from "react";

export class NewsItem extends Component {
  handleImageError(event) {
    let backupUrl =
      "https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_1280.jpg";
    event.target.src = backupUrl;
  }

  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="card my-3">
        <div
          className="position-absolute d-flex end-0"
          style={{ top: "-10px" }}
        >
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_1280.jpg"
          }
          className="card-img-top"
          onError={this.handleImageError}
          alt="Sports"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
