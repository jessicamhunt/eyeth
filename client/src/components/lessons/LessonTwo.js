import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const LessonTwo = () => {
  return (
    <Fragment>
      <section className="container">
        <h1 className="large text-primary">ASL Lesson Two</h1>
        <p className="lead">
          <i className="far fa-eye"></i> Introduction
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
          <h2>A Brief Glimpse Into Deaf Culture</h2>
          <br></br>
          <p>
            A simple way to define culture would be to relate it to the unique
            attributes, values, and beliefs that a certain group of people
            share. Different groups of people are socialized differently and
            develop distinct ways of behaving in the world around them. Having a
            thorough understanding of a person’s culture may still be quite
            difficult to obtain, regardless of how much is known.
          </p>
          <br></br>
          <p>
            One way to begin understanding a culture is to look into how those
            people identify themselves. Throughout the years, there have been
            many terms coined and used to describe the Deaf population, most of
            which focus on a perceived lack or loss of ability (for example, the
            terms “hearing impaired”, “deaf”, “people with hearing loss” etc.).
            Some terms are outdated, wildly offensive, and even so are still
            used in today’s society (“deaf mute”, “deaf and dumb” – yes, some
            people still use these).
          </p>
          <br></br>
          <p>
            You will often see the Deaf community referred to as “Deaf” with a
            capital “D”. This sheds a positive light on the Deaf population
            because instead of focusing on a lack of ability, it focuses on what
            they have gained – a completely unique culture, with their own
            language, community, values, and beliefs.
          </p>
          <br></br>
          <p>
            Unlike American culture which emphasizes independence and individual
            success, those who identify with Deaf culture value contributing to
            the success of their community (not to say they do not recognize
            personal achievements and success). Since the United States majority
            is not part of the signing and visual communication world, it is
            somewhat of an unaddressed social responsibility for members within
            Deaf culture to keep each other informed and up to date with what is
            going on in the Deaf community and across the world. They develop
            long lasting, personal, close relationships with other members
            within their community and have intricate, close knit, networking
            systems.
          </p>
          <br></br>
          <p>
            Connections between people in the Deaf community are important; with
            the intimacy of the population who identify as Deaf, during initial
            meetings and introductions amongst each other, signers will
            determine each other’s connection to the Deaf community. For
            example, commonly shared information during an introduction includes
            fingerspelling full first and last name, and whether you are hearing
            or Deaf. If you are hearing, a Deaf person may ask where you go to
            school, if your teacher is Deaf, and their first and last name. If
            you are Deaf, you will most likely be asked where you were raised,
            if you went to a Deaf or residential school, if you went to
            Gallaudet University, and if so, what year you graduated. By doing
            this, you may start discussing people you know in common, and you
            are deepening your connection with the Deaf community.
          </p>
          <br></br>
          <p>
            THINK ABOUT IT: Imagine living in a world where no one speaks your
            language, except for a small group of people. One day, you come
            across someone who also speaks your language whom you have never met
            before. What would you want to talk about/ask them?
          </p>
          <div className="buttons my-2">
            <Link to="/lessons" className="btn btn-primary">
              Back To Lessons
            </Link>
            <Link to="/videotwo" className="btn btn-primary">
              Go To Video
            </Link>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default LessonTwo;
