import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const LessonThree = () => {
  return (
    <Fragment>
      <section className="container">
        <h1 className="large text-primary">ASL Lesson Three</h1>
        <p className="lead">
          <i className="far fa-eye"></i> Colors and Describing People
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
          <h2>How Rude!</h2>
          <br></br>
          <p>
            I once worked at a restaurant, and during a busy night of service, a
            server came up to me complaining about a very rude table. They
            wouldn’t answer her, acknowledge her, and then they tried to wave
            her down – a request she ignored. I looked over, saw them signing,
            and explained – “it’s quite possible they could be Deaf.” She looked
            over to see them signing as well. And yup, she did feel like a jerk.
          </p>
          <br></br>
          <p>
            It is important to consider that different cultures have different
            behaviors as well as differing views on what is considered offensive
            or rude. Although waving in someone’s direction may have seemed rude
            to her, among Deaf signers it is simply a way of getting someone’s
            attention and the size of the wave is relative to the distance
            between the two. Other methods for getting someone’s attention
            include tapping gently and firmly on their upper arm or shoulder if
            they are facing away from you. If the person whose attention is
            being requested is even farther away or out of eyesight, another
            person may assist by getting their attention and directing them to
            the signer who requested it. Deaf signers may also tap or hit
            surfaces to create vibrations to do this as well.
          </p>
          <br></br>
          <p>
            There are also certain things that seem harmless but may be
            considered rude or disrespectful to members of the Deaf community.
            For example, it may be considered rude if one watches a signed
            conversation. Typically, people around are not fluent in sign
            language, so even though the physical, visual expression is “public”
            it is still a private conversation. Watching would be a form of
            eavesdropping.
          </p>
          <br></br>
          <p>
            Additionally, talking (using your voice) in front of Deaf signers
            may be seen as disrespectful or insensitive, especially if you know
            ASL, or unless you have the assistance of an interpreter. Consider
            the fact that you are providing information in the conversation that
            they don’t have access to, that they could have access to.
          </p>
          <br></br>
          <p>
            There may also be certain things you think would be rude to Deaf
            signers, that are actually harmless. In the instance when your path
            is blocked by two signers conversing with one another, simply
            walking between them is fine (if there is enough room of course!).
            It is a common misconception that doing so lacks courtesy, but it is
            actually other ways of maneuvering that are less accepted. Running
            or hurrying between them, bending over to walk below their signing
            area, waiting for them to stop, are all frowned upon, some more so
            then others. It is a way of drawing unnecessary attention to a
            mundane occurrence. If there isn’t enough room for you to pass
            through, you may have to find another path, in which touching/moving
            a person to the side is considered acceptable.
          </p>
          <br></br>
          <p>
            It is hard to fully understand the complexities of culture by simply
            reading about them – it often will develop overtime through more
            experience and prolonged interaction. Until then, have an open mind
            and heart; admire the uniquity of Deaf culture and the fun and
            beauty of ASL.
          </p>
          <div className="buttons my-2">
            <Link to="/lessons" className="btn btn-primary">
              Back To Lessons
            </Link>
            <Link to="/videothree" className="btn btn-primary">
              Go To Video
            </Link>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default LessonThree;
