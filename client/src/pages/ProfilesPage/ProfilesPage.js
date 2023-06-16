import React from "react";
import { useNavigate } from "react-router-dom";
import profilesData from "../../data/profiles.json";
import "./ProfilesPage.scss";
import chartImage from "../../assets/images/graph@3x.png";

const ProfilesPage = () => {
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
          className="article__side__button"
          onClick={handleClick1}
        >
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
        <p className="article__main__name">Jorge</p>
        <img className="article__main__image" src={profilesData[0].image} />
        <div className="article__main__info">
          <p className="article__main__info__location">{profilesData[0].location}</p>
          {/* <p className="article__main__info__age">{profilesData[0].age}</p> */}
          <p className="article__main__info__occupation">
            {/* {profilesData[0].occupation} */}
          </p>
        </div>
        <div className="article__main__chart">
          <img src={chartImage} className="article__main__chart__image"/>
          <h3 className="article__main__chart__title">Chart Title</h3>
          <p className="article__main__chart__detail">Chart Details</p>
        </div>

      </article>
    </div>
  );
};

export default ProfilesPage;
