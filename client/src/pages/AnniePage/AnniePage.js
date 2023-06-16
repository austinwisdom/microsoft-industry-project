import React from "react";
import { useNavigate } from "react-router-dom";
import profilesData from "../../data/profiles.json";
import "./AnniePage.scss";
import chartImage from "../../assets/images/graph@3x.png";
import alertIcon from "../../assets/icons/red-alert.svg";
import mapIcon from "../../assets/icons/Map.png";

const AnniePage = () => {
  const navigate = useNavigate();
  const handleClick1 = () => {
    navigate("");
  };
  const handleClick2 = () => {
    navigate("/annie");
  };
  const handleClick3 = () => {
    navigate("/david");
  };
  const handleClick4 = () => {
    navigate("/profiles");
  };

  return (
    <div className="profiles-page">
      <article className="article__side">
        <button className="article__side__button" onClick={handleClick4}>
          Me
        </button>
        <button
          className="article__side__button article__side__button--active"
          onClick={handleClick1}
        >
          Annie
          <img className="alert-icon" src={alertIcon} />
        </button>
        <button className="article__side__button" onClick={handleClick2}>
          David
        </button>
        <button className="article__side__button" onClick={handleClick3}>
          Angela
        </button>
        <button className="article__side__button" onClick={handleClick4}>
          Brian
        </button>
      </article>
      <article className="article__main">
        <img className="article__main__image" src={profilesData[1].image} />
        <p className="article__main__name">
          Welcome back Annie! Here are some details about how your data is being
          used.
        </p>
        <img className="article__main__map" src={mapIcon} />
        <p className="article__main__map__detail">
          Untrusted traffic suspected!
          <img className="alert-icon" src={alertIcon} />
        </p>
        <div className="article__main__chart">
          <img src={chartImage} className="article__main__chart__image" />
          <h3 className="article__main__chart__title">Chart Title</h3>
          <p className="article__main__chart__detail">Chart Details</p>
        </div>
      </article>
    </div>
  );
};

export default AnniePage;
