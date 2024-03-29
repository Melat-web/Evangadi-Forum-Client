import React from "react";
import "./Home.css";
import RegisterAndLogin from "../Registration and Signin/RegisterAndLogin";
import Section from "../Section/Section";

function Home() {
  return (
    <div>
      <div className="mainHomeWrapper">
        <div className="homeComponents">
          <RegisterAndLogin />
          <Section />
        </div>
      </div>
    </div>
  );
}

export default Home;
