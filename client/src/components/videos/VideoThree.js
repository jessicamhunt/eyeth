import React, { Fragment } from "react";
import ReactPlayer from "react-player/youtube";
import { Link } from "react-router-dom";

const VideoThree = () => {
  return (
    <Fragment>
      <div className="container">
        <h1 className="large text-primary">Lesson Three Video</h1>
        <p className="lead">
          <i className="far fa-eye"></i> Colors and Describing People
        </p>
        {/* Only loads the YouTube player */}
        <ReactPlayer url="https://www.youtube.com/watch?v=kQikk2yA0IA&authuser=0" />
        <div className="buttons my-2">
          <Link to="/lessons" className="btn btn-primary">
            Back To Lessons
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default VideoThree;
