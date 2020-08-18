import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const LessonFour = () => {
  return (
    <Fragment>
      <section className="container">
        <h1 className="large text-primary">ASL Lesson Four</h1>
        <p className="lead">
          <i className="far fa-eye"></i> Family and Friends
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
          <h2>Deaf In The Family</h2>
          <br></br>
          <p>
            Approximately 90% of Deaf people who marry are married to other Deaf
            people. This is the highest rate of intermarriages than any other
            ethnic group. There is a special comfort that comes from the sharing
            the same language as well as the same network of friends and peers
            within the community. They sign with their community and their
            children will learn sign from them (if they are to have children, of
            course!).
          </p>
          <br></br>
          <p>
            Now consider the fact that only 10-13% of Deaf children are born
            into families that have other Deaf members. Communication may come
            with some initial barriers, but ASL will most likely be their
            primary language. Statistics propose that 20% of Deaf children are
            born to hearing parents that embrace Deaf culture and know/use
            American Sign Language. But what about the other 70% of Deaf
            children that are born to hearing parents? In fact, how hearing
            parents (who may often have little if any knowledge of ASL) address
            the needs of their Deaf children will have important lifelong
            effects.
          </p>
          <br></br>
          <p>
            When hearing parents are initially made aware of their child’s
            Deafness (gradual onset or not) they may experience what is known as
            the “Diagnosis Crisis” – a series of stages that replicate the
            stages of grief (denial, anger, bargaining, depression, and
            acceptance). Unlike the stages of grief, however, they are grieving
            for a child who is very much alive, and the effects of these stages
            are observable by their child. This can lead to incredibly low
            self-esteem among Deaf children, especially during early stages of
            socialization. The feedback they receive from their parents, even
            though it may be unintentional, assists in the formation of their
            self and identity around the idea that “there’s something wrong with
            me – I need to be fixed.”
          </p>
          <br></br>
          <p>
            Parents of Deaf children, as well as society, often approach
            Deafness with the “fix-it” mentality, bringing their child to
            doctors, therapist, speech language therapist, audiologists – the
            list goes on – all with the intention to “cure” their child of
            Deafness, as if it is a horrible disease. This reinforces their
            child’s growing negative perception of self; “There’s something
            wrong with me that needs to be fixed. I won’t be normal or fit in
            otherwise.”
          </p>
          <br></br>
          <p>
            Their child’s negatively impacted self-worth is one of many
            unintentional effects of the “fix-it” mentality. Often, this denial
            and bargaining of Deafness occurs during a time in a child’s life
            that is crucial for language development. Instead of learning how to
            communicate effectively with those around them, going to school,
            developing connections and friendships, the time is allocated
            elsewhere, towards speech therapy, lip-reading, hearing aids,
            cochlear implants, and education in different ways. Consequently,
            education of reading, writing, arithmetic, science, and other
            elementary subjects suffer.
          </p>
          <br></br>
          <p>
            Granted, this is all unintentional and most parents are unaware of
            how this may affect their child. They are simply doing what they
            feel is in their child’s best interest at the time.
          </p>
          <br></br>
          <p>
            All of this happens despite the evidence of positive impacts of ASL
            during infancy. Additionally, ASL has become increasingly popular
            among hearing parents and their hearing children. If sign language
            is good for hearing babies, why not Deaf babies?
          </p>
          <br></br>
          <p>
            It isn’t until later among ASL and Deaf peers that individuals
            develop a true sense of belonging, and this is something they will
            struggle with throughout most of their school life. For a lot of
            individuals in the Deaf community, the place they first feel they
            belong is Gallaudet University, which is one of the reasons it is
            such an important institution with the Deaf community, many of which
            call it “home”.
          </p>
          <br></br>
          <p>
            The impact on Deaf children’s education will have a ripple affect
            throughout their life, and often contributes to the cycle of
            inequality they may face as adults. Of course, there are exceptions.
            There are many ways to be Deaf – born Deaf to Deaf parents, born
            Deaf to hearing parents, born hearing and become Deaf, born Deaf to
            hearing parents who know sign and embrace Deaf culture, etc.
            However, most share similar struggles within early education to some
            degree, whether it be on behalf of their parents or educational
            provisions on behalf of their schools. The emphasis on
            communication, education and finding belonging tends to be
            consistent throughout many Deaf individual’s upbringings.
          </p>
          <br></br>
          <a href="http://www.deaf-culture-online.com/deaf-again.html">
            Source (And An Excellent Book)
          </a>
          <br></br>
          <a href="https://www.youtube.com/watch?v=tJeAG8tZyf4">
            Through Deaf Eyes - Documentary
          </a>
          <br></br>
          <a href="https://www.verywellhealth.com/what-challenges-still-exist-for-the-deaf-community-4153447">
            More Information
          </a>
          <br></br>
          <a href="http://iglesiamartell.com/understanding-the-injustices-faced-by-the-deaf-community/">
            Even More Information
          </a>
          <div className="buttons my-2">
            <Link to="/lessons" className="btn btn-primary">
              Back To Lessons
            </Link>
            <Link to="/videofour" className="btn btn-primary">
              Go To Video
            </Link>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default LessonFour;
