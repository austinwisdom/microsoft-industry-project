import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import profilesData from "../../data/profiles.json";
import "./ProfilesPage.scss";
import chartImage from "../../assets/images/graph@3x.png";
import profilePic from "../../assets/Ellipse 3.png"
import alertIcon from "../../assets/icons/red-alert.svg"
import graph from "../../assets/RoughGraph.png"

const ProfilesPage = () => {
  const navigate = useNavigate();
  const handleClick1 = () => {
    navigate("/profiles/annie");
  };
  const handleClick2 = () => {
    navigate();
  };
  const handleClick3 = () => {
    navigate("/david");
  };
  const handleClick4 = () => {
    navigate("/angela");
  };

  return (
    <div className="profiles-page">
      <article className="article__side">
      <button
          className="article__side__button article__side__button--active"
          onClick={handleClick4}
        >
          Me
        </button>
        <button
          className="article__side__button alert__button"
          onClick={handleClick1}
        >
          <img className="alert-icon" src={alertIcon} />
          Annie
        </button>
        <button
          className="article__side__button"
          onClick={handleClick2}
        >
          David
        </button>
        <button
          className="article__side__button"
          onClick={handleClick3}
        >
          Angela
        </button>
        <button
          className="article__side__button"
          onClick={handleClick4}
        >
          Brian
        </button>
      </article>
      <article className="article__main">
        <img className="article__main__image" src={profilePic} />
        <p className="article__main__name">Welcome back Andrew! Here are some details about how your data is being used.</p>
        <div className="article__main__info">
          {/* <p className="article__main__info__location">{profilesData[0].location}</p> */}
          {/* <p className="article__main__info__age">{profilesData[0].age}</p> */}
          <p className="article__main__info__occupation">
            {/* {profilesData[0].occupation} */}
            <h1>Risk level:</h1>
            <h2 className="low">Low</h2>
            There are currently no risks to your privacy
          </p>
        </div>
        <div className="article__main__chart">
          <img src={graph} className="article__main__chart__image"/>
          <h3 className="article__main__chart__title">Your data has been sold recently</h3>
          <p className="article__main__chart__detail"></p>
        </div>

      </article>
    </div>
  );
};

export default ProfilesPage;
