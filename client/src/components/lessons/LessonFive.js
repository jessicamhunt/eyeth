import React, { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";

const LessonFive = () => {
  return (
    <Fragment>
      <section className="container">
        <h1 className="large text-primary">Lesson Five</h1>
        <p className="lead">
          <i className="fas fa-user"></i> Description of Lesson
        </p>
        <div className="bg-light p-2 m-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            venenatis ante quam, lacinia maximus dui efficitur in. Fusce
            dignissim et sem non tincidunt. Mauris ante urna, feugiat id tortor
            quis, pretium feugiat erat. Pellentesque euismod blandit lorem, in
            rhoncus odio consequat eu. Nunc laoreet lectus felis, nec mollis
            justo sodales id. Quisque suscipit elit ac ipsum tincidunt laoreet
            et sed orci. Quisque a pretium sem. In ullamcorper tortor lorem, et
            placerat ante lacinia vel. Pellentesque ut lacus nec augue mollis
            vehicula. Nulla quam ex, varius auctor tempor in, dictum eu nulla.
            Ut et arcu a mauris placerat posuere. Vivamus eros odio,
            pellentesque non posuere
          </p>
          <br></br>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            venenatis ante quam, lacinia maximus dui efficitur in. Fusce
            dignissim et sem non tincidunt. Mauris ante urna, feugiat id tortor
            quis, pretium feugiat erat. Pellentesque euismod blandit lorem, in
            rhoncus odio consequat eu. Nunc laoreet lectus felis, nec mollis
            justo sodales id. Quisque suscipit elit ac ipsum tincidunt laoreet
            et sed orci. Quisque a pretium sem. In ullamcorper tortor lorem, et
            placerat ante lacinia vel. Pellentesque ut lacus nec augue mollis
            vehicula. Nulla quam ex, varius auctor tempor in, dictum eu nulla.
            Ut et arcu a mauris placerat posuere. Vivamus eros odio,
            pellentesque non posuere
          </p>
          <br></br>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            venenatis ante quam, lacinia maximus dui efficitur in. Fusce
            dignissim et sem non tincidunt. Mauris ante urna, feugiat id tortor
            quis, pretium feugiat erat. Pellentesque euismod blandit lorem, in
            rhoncus odio consequat eu. Nunc laoreet lectus felis, nec mollis
            justo sodales id. Quisque suscipit elit ac ipsum tincidunt laoreet
            et sed orci. Quisque a pretium sem. In ullamcorper tortor lorem, et
            placerat ante lacinia vel. Pellentesque ut lacus nec augue mollis
            vehicula. Nulla quam ex, varius auctor tempor in, dictum eu nulla.
            Ut et arcu a mauris placerat posuere. Vivamus eros odio,
            pellentesque non posuere
          </p>
          <div className="buttons my-2">
            <Link to="/lessons" className="btn btn-primary">
              Back To Lessons
            </Link>
            <Link to="/lessons" className="btn btn-primary">
              Go To Video
            </Link>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default LessonFive;
