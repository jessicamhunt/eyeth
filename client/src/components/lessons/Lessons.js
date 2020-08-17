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
            ASL Lesson One - The Alphabet
          </Link>
          <Link to="/lessontwo" className="btn btn-primary">
            ASL Lesson Two - Intro
          </Link>
          <Link to="/lessonthree" className="btn btn-primary">
            ASL Lesson Three - Colors and Describing People
          </Link>
          <Link to="/lessonfour" className="btn btn-primary">
            ASL Lesson Four - Family and Friends
          </Link>
        </div>
      </section>
    </Fragment>
  );
};

export default Lessons;
