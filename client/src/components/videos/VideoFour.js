import React, { Fragment } from "react";
import ReactPlayer from "react-player/youtube";
import { Link } from "react-router-dom";

const VideoFour = () => {
  return (
    <Fragment>
      <div className="container">
        <h1 className="large text-primary">Lesson Four Video</h1>
        <p className="lead">
          <i className="far fa-eye"></i> Family and Friends
        </p>
        {/* Only loads the YouTube player */}
        <ReactPlayer url="https://www.youtube.com/watch?v=ag20lxgouyA&authuser=0" />
        <div className="buttons my-2">
          <Link to="/lessons" className="btn btn-primary">
            Back To Lessons
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default VideoFour;
