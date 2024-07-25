import React, { Component } from "react";
import "./styles/styles.css"
import Image from './default.png'

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div
        className="card my-3 mx-3 rounded-border shadow"
        style={{
          width: "25rem",
          height: "26rem",
        }}
      >
        <img src={imageUrl || Image} height={"231px"} alt="..." style={{ 'background-size': 'cover', overflow: "hidden" }} className={'rounded-border-top'} />
        <div className="card-body">
          <h5 className="card-title line-clamp">{title}</h5>
          <p className="card-text line-clamp" >{description}</p>
          <a
            href={newsUrl}
            rel="noreferrer"
            target="_blank"
            className="btn btn-dark btn-sm"
            style={{
              position: "absolute",
              bottom: '20px',
              right: '20px'
            }}
          >
            Read More
          </a>
        </div>
      </div>
    );
  }
}
