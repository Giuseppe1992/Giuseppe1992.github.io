import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Contact from "./contact/Contact";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Top from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import Profile from "./profile/Profile";
import CookieConsent from "react-cookie-consent";

export default class Main extends Component {
  render() {
    return (
      <div>
          <CookieConsent
              location="bottom"
              buttonText="Sure man!!"
              cookieName="myAwesomeCookieName2"
              style={{ background: "#2B373B" }}
              buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
              expires={150}
          >
              This website uses cookies to enhance the user experience.{" "}
          </CookieConsent>
        <Header />
        <Greeting />
        <Skills />
        <WorkExperience />
        <StartupProject />
        <Achievement />
        <Talks />
        <Profile />
        <Footer />
        <Top />
      </div>
    );
  }
}
