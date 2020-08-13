import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "../layout/NotFound";
import Register from "../auth/Register";
import Login from "../auth/Login";
import Alert from "../layout/Alert";
import Dashboard from "../dashboard/Dashboard";
import CreateProfile from "../profile-forms/CreateProfile";
import EditProfile from "../profile-forms/EditProfile";
import Profiles from "../profiles/Profiles";
import Profile from "../profile/Profile";
import AddExperience from "../profile-forms/AddExperience";
import AddEducation from "../profile-forms/AddEducation";
import Posts from "../posts/Posts";
import Post from "../post/Post";
import PrivateRoute from "../routing/PrivateRoutes";
import Lessons from "../lessons/Lessons";
import LessonOne from "../lessons/LessonOne";
import LessonTwo from "../lessons/LessonTwo";
import LessonThree from "../lessons/LessonThree";
import LessonFour from "../lessons/LessonFour";
import LessonFive from "../lessons/LessonFive";
import VideoOne from "../videos/VideoOne";
import VideoTwo from "../videos/VideoTwo";
import VideoThree from "../videos/VideoThree";
import VideoFour from "../videos/VideoFour";
import VideoFive from "../videos/VideoFive";

const Routes = (props) => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profiles" component={Profiles} />
        <Route exact path="/profile/:id" component={Profile} />
        <Route exact path="/lessons" component={Lessons} />
        <Route exact path="/lessonone" component={LessonOne} />
        <Route exact path="/lessontwo" component={LessonTwo} />
        <Route exact path="/lessonthree" component={LessonThree} />
        <Route exact path="/lessonfour" component={LessonFour} />
        <Route exact path="/lessonfive" component={LessonFive} />
        <Route exact path="/videoone" component={VideoOne} />
        <Route exact path="/videotwo" component={VideoTwo} />
        <Route exact path="/videothree" component={VideoThree} />
        <Route exact path="/videofour" component={VideoFour} />
        <Route exact path="/videofive" component={VideoFive} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/create-profile" component={CreateProfile} />
        <PrivateRoute exact path="/edit-profile" component={EditProfile} />
        <PrivateRoute exact path="/add-experience" component={AddExperience} />
        <PrivateRoute exact path="/add-education" component={AddEducation} />
        <PrivateRoute exact path="/posts" component={Posts} />
        <PrivateRoute exact path="/posts/:id" component={Post} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
