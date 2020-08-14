import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Fragment>
      <section className="container">
        <h1 className="large text-primary">About</h1>
        <p className="lead">
          <i className="far fa-eye"></i> What is Eyeth?
        </p>
        <div className="bg-light p-2 m-2">
          <strong>* Disclamer</strong>
          <p>
            <small>
              I am a hearing person and ASL/English Interpreting student at
              Community College of Philadelphia. I am still learning and am not
              a professional interpreter. Assistance from the Deaf community and
              ASL interpreters is needed. It is my intention to be an ally to
              the community.{" "}
              <a href="mailto:projecteyeth@gmail.com">Please reach out!</a>
            </small>
          </p>
          <br></br>
          <h2>About</h2>
          <br></br>
          <p>
            I am a current student who is passionate about spreading awareness
            about Deaf culture, the Deaf community, and the discrimination that
            are persistent for Deaf and HOH (hard of hearing) individuals in
            today’s society. When beginning my studies, it became obvious that
            hearing society is unaware of such challenges and a lot lack even a
            basic understanding of the Deaf community. We created Eyeth as a way
            to raise awareness and bridge the gap between the Deaf and hearing
            communities. With the assistance of both the Deaf and hearing, what
            started as a service-learning project has the potential to grow into
            something much greater. Eyeth is that project.
          </p>
          <br></br>
          <h2>Mission</h2>
          <br></br>
          <p>
            The concept for Eyeth was quite simple initially: provide
            information on Deaf history and culture as well as introductory ASL
            lessons to promote communication. After much brainstorming and
            research, we came to our “A-Ha!” moment. One of the reasons for
            hearing society’s misunderstanding of the Deaf community is due to
            the hearing’s limited (or, for some, non-existent) interaction with
            Deaf individuals. What if we could create an environment that
            brought the two together with the intent of broadening understanding
            and learning about the Deaf community? And so, our social media
            concept for Eyeth was born.
          </p>
          <br></br>
          <p>
            Our mission for Eyeth is to raise awareness of the Deaf community,
            their culture and history by creating a safe, friendly, and open
            minded online community in which those wanting to learn more can
            interact and establish relationships for those willing to provide a
            better understanding of the Deaf community. Together, we would like
            to bridge the gap between the hearing and Deaf communities and
            enlighten the unaware to the discrimination faced by Deaf and HOH
            individuals.
          </p>
          <br></br>
          <h2>What is Eyeth?</h2>
          <br></br>
          <p>
            <strong>
              "<i>Eyeth</i> is an imaginary planet occupied by signers, a part
              of Deaf mythology. While a lot of Hollywood films have depicted
              ASL culture in a rather dreary light. I chose to use comedy to
              present this mythology." -- Arthur Luhn.
            </strong>
          </p>
          <br></br>
          <p>
            Arthur Luhn created a light-hearted and comedic short that tells the
            story of an ASL scientist who is creating a flying machine that will
            take him to the planet Eyeth, where everyone communicates using sign
            language. Eyeth is an imaginary planet for “people of the eye”,
            where everyone communicates with visuals, where Earth is for people
            who speak and use their hearing. Consider the difference EYEth and
            EARth.
          </p>
          <br></br>
          <p>
            There are many variations and different stories of the imaginary
            planet Eyeth throughout ASL literature.
          </p>
          <br></br>
          <p>
            Using Eyeth as our model planet, we created our online community in
            the image of it’s values.
          </p>
          <a href="https://www.handspeak.com/culture/index.php?id=46">Source</a>
          <div className="buttons my-2">
            <Link to="/lessons" className="btn btn-primary">
              Learn
            </Link>
            <Link to="/profiles" className="btn btn-primary">
              Connect
            </Link>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
