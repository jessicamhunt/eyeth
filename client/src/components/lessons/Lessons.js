import React, { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";

const Lessons = () => {
  return (
    <Fragment>
      <section className="container">
        <h1 className="large text-primary">Learn American Sign Language</h1>
        <p className="lead">
          <i className="fas fa-user"></i> Choose A Lesson To Get Started!
        </p>
        <div className="buttons">
          <Link to="/lessonone" className="btn btn-primary">
            Lesson One
          </Link>
          <Link to="/lessontwo" className="btn btn-primary">
            Lesson Two
          </Link>
          <Link to="/lessonthree" className="btn btn-primary">
            Lesson Three
          </Link>
          <Link to="/lessonfour" className="btn btn-primary">
            Lesson Four
          </Link>
          <Link to="/lessonfive" className="btn btn-primary">
            Lesson Five
          </Link>
        </div>
      </section>
    </Fragment>
  );
};

export default Lessons;
