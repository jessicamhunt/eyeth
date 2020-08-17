import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const LessonOne = () => {
  return (
    <Fragment>
      <section className="container">
        <h1 className="large text-primary">ASL Lesson One</h1>
        <p className="lead">
          <i className="far fa-eye"></i> The Alphabet
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
          <h2>What Is American Sign Language (ASL) ?</h2>
          <p>
            ASL is a language capable of expressing abstract ideas that utilizes
            space and movement to convey meaning. It is a visual/spatial
            language and, like any other language, ASL is fully able to express
            any idea, abstract or concrete. ASL would not be able to flourish if
            it were not capable of meeting all the needs of Deaf people to
            communicate their ideas, needs, and thoughts.
          </p>
          <br></br>
          <p>
            A common misconception of ASL is that it is a visual form of
            English. It is not; ASL is it’s own unique and defined language with
            grammar and syntax different from English. Consequently, signs are
            not a “word for word” translation from English (consider that the
            profession is called ASL interpreter not translator).
          </p>
          <br></br>
          <p>
            ASL is used by most Deaf people in Canada and the United States,
            with the exception of Quebec which uses a different sign language.
            Other countries have their own sign languages as well!
          </p>
          <br></br>
          <p>
            <a href="https://www.lifeprint.com/asl101/pages-layout/asl1.htm">
              Keep Reading
            </a>
          </p>
          <br></br>
          <h2>A Brief History of ASL</h2>
          <br></br>
          <p>
            ASL has evolved over the past 250 years as the main form of
            expression of thoughts, ideas, and needs for the Deaf community in
            the United States and Canada. Although evidence of ASL in the United
            States traces back to the early 1600’s, it wouldn’t be recognized as
            a true and distinct language until a little over 300 years later, in
            the mid 1960’s. Since then, the interest and amount of hearing
            people who study ASL has grown as well.
          </p>
          <br></br>
          <p>
            Historically, ASL is related to French Sign Language, which was
            brought to the United States by{" "}
            <a href="https://www.gallaudet.edu/tutorial-and-instructional-programs/english-center/reading-english-as-second-language/practice-exercises/laurent-clerc">
              Laurent Clerk
            </a>{" "}
            when he teamed up with a hearing American minister{" "}
            <a href="https://www.gallaudet.edu/about/history-and-traditions/thomas-hopkins-gallaudet">
              Thomas Gallaudet
            </a>{" "}
            to form the first school for the Deaf in Hartford, Connecticut in
            1817. Regional dialects of signing communities in the 1600’s off
            Cape Cod would also contribute to the ASL taught at the school for
            the Deaf. This blend of French and American sign has formed the
            foundation for what ASL is today.{" "}
          </p>
          <br></br>
          <p>
            In the 19th century, ASL thrived in residential schools proving a
            successful way to educate Deaf person using both a mix of ASL and
            written English. In 1864, President Abraham Lincoln signed a charter
            establishing{" "}
            <a href="https://www.gallaudet.edu/about/history-and-traditions">
              Gallaudet University
            </a>
            , an educational institution for ASL in higher education which
            continues to contribute to standardized ASL among the Deaf
            community.{" "}
          </p>
          <br></br>
          <p>
            In 1880, the International Congress on the Education of the Deaf
            Conference in Milan, Italy, passed statutes that supported the
            oralist method, successfully banning ASL from being taught or
            accepted within school. The idea behind oralism (a belief that is
            still held by some today) is that using sign language would prevent
            Deaf children from learning how to speak. The repercussions of this
            implementation are still being felt today, and often the education
            of Deaf children suffers during a crucial language learning period
            of their lives. But ASL still lived on through Deaf clubs and social
            events, as well as at Gallaudet University.{" "}
          </p>
          <br></br>
          <p>
            Linguists recognized ASL as a unique and certified language with
            it’s own grammar and syntax in 1960 (80 years after the conference
            in Milan). With this, positive regard for ASL and Deaf culture
            re-emerged into the public eye, empowering Deaf people to take
            control of the institutions that impacted and shaped their lives. In
            1988, when Gallaudet University was appointed a hearing President,
            the weeklong protest that followed (called{" "}
            <a href="https://www.gallaudet.edu/about/history-and-traditions/deaf-president-now">
              Deaf President Now
            </a>
            ), was successful in not only getting a Deaf president for
            Gallaudet, but also illuminating the discrimination the Deaf
            community faces. The protest received international attention, and
            Deaf pride soared. This was the first deaf president of Gallaudet,
            which was then a 124-year-old institution.
          </p>
          <br></br>
          <p>
            Discrimination, misconceptions, injustices, and unequal
            opportunities are still faced by the Deaf community today, even with
            policies in place that prevent it. The persistence and resilience of
            ASL shows the significance it holds for the Deaf community, and the
            value of communication.{" "}
          </p>
          <div className="buttons my-2">
            <Link to="/lessons" className="btn btn-primary">
              Back To Lessons
            </Link>
            <Link to="/videoone" className="btn btn-primary">
              Go To Video
            </Link>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default LessonOne;
