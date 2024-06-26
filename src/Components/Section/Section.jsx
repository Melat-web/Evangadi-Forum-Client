import "./Section.css";
import { Link, } from "react-router-dom";

function Section() {
  return (
    <section>
      <div className="aboutMainWrapper">
        <p className="aboutColor">About</p>
        <h1>Evangadi Networks Q&A</h1>
        <div className="textColor">
          <p>
            No matter what stage of life you are in, whether you’re just
            starting elementary
            <br /> school or being promoted to CEO of a Fortune 500 company, you
            have much to <br />
            offer to those who are trying to follow in your footsteps.
          </p>
          <br />
          <p>
            Wheather you are willing to share your knowledge or you are just
            looking to meet
            <br /> mentors of your own, please start by joining the network
            here.
          </p>
        </div>

        <Link to="/how-it-works">
          <button className="aboutButton">HOW IT WORKS</button>
        </Link>
      </div>
    </section>
  );
}

export default Section;
