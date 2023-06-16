import React from "react";
import { useNavigate, Link } from "react-router-dom";
import profilesData from "../../data/profiles.json";
import "./JorgePage.scss";
import chartImage from "../../assets/images/graph@3x.png";

const JorgePage = () => {
  const navigate = useNavigate();
  const handleClick1 = () => {
    navigate("/jorge");
  };
  const handleClick2 = () => {
    navigate("/annie");
  };
  const handleClick3 = () => {
    navigate("/david");
  };
  const handleClick4 = () => {
    navigate("/Zander");
  };

  return (
    <div className="profiles-page">
      <article className="article__main">
        <p className="article__main__name">{profilesData[0].name}</p>
        <img className="article__main__image" src={profilesData[0].image} />
        <div className="article__main__info">
          <p className="article__main__info__location">{profilesData[0].location}</p>
          <p className="article__main__info__age">{profilesData[0].age}</p>
          <p className="article__main__info__occupation">
            {profilesData[0].occupation}
          </p>
        </div>
        <div className="article__main__chart">
          <img src={chartImage} className="article__main__chart__image"/>
          <h3 className="article__main__chart__title">Chart Title</h3>
          <p className="article__main__chart__detail">Chart Details</p>
        </div>

      </article>
      <Link to={"/user"} className="user__details">user details</Link>
      <article className="article__side">
        <button
          className="article__side__button article__side__button__1"
          onClick={handleClick1}
        >
          {profilesData[0].name}
        </button>
        <button
          className="article__side__button article__side__button__1"
          onClick={handleClick2}
        >
          {profilesData[1].name}
        </button>
        <button
          className="article__side__button article__side__button__1"
          onClick={handleClick3}
        >
          {profilesData[2].name}
        </button>
        <button
          className="article__side__button article__side__button__1"
          onClick={handleClick4}
        >
          {profilesData[3].name}
        </button>
      </article>
    </div>
  );
};

export default JorgePage;
