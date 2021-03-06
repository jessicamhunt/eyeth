import React, { Fragment } from "react";
import ReactPlayer from "react-player/youtube";
import { Link } from "react-router-dom";

const VideoFive = () => {
  return (
    <Fragment>
      <div className="container">
        <h1 className="large text-primary">Lesson Five Video</h1>
        <p className="lead">
          <i className="fas fa-user"></i> Description of Video
        </p>
        {/* Only loads the YouTube player */}
        <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
        <div className="buttons my-2">
          <Link to="/lessons" className="btn btn-primary">
            Back To Lessons
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default VideoFive;
