import React from "react";
import { useNavigate, Link } from "react-router-dom";
import profilesData from "../../data/profiles.json";
import "./AnniePage.scss";
import chartImage from "../../assets/images/graph@3x.png";
import alertIcon from "../../assets/icons/red-alert.svg"
import map from "../../assets/Map.png"


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
        <button
            className="article__side__button"
            onClick={handleClick4}
          >
            Me
          </button>
          <button
            className="article__side__button article__side__button--active"
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
        <Link to={"/user"} className="user__details">user details</Link>
        <article className="article__main">
          <img className="article__main__image" src={profilesData[1].image} />
          <p className="article__main__name">Here are some details about how Annie's data is being used.</p>
          <div className="article__main__info">
            {/* <p className="article__main__info__location">{profilesData[0].location}</p> */}
            {/* <p className="article__main__info__age">{profilesData[0].age}</p> */}
            <p className="article__main__info__occupation">
              {/* {profilesData[0].occupation} */}
            </p>
          </div>
          <div className="article__main__chart">
            <img src={map} className="article__main__chart__image"/>
            <h3 className="article__main__chart__title">Unusual activity detected</h3>
            <p className="article__main__chart__detail">Imediate action recommended</p>
          </div>
  
        </article>
      </div>
    );
  };

export default AnniePage;