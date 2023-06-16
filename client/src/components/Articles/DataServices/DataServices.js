import "./DataServices.scss";
import warningIcon from "../../../assets/warning.png"
import RoughGraph from "../../../assets/RoughGraph.png"
import { Link } from "react-router-dom";

const DataServices = () => {
  return (
  <section className="data-services">
    <div className="data-services__head">
      <p>Data Services</p>
      <Link className="data-services__link"  to={"/profiles"} >
      <p className="data-services__link">Data Preferences</p>
      </Link>
    </div>
    <div className="data-services__note">
      <p>Andrew advising his grandfather David about his stats. Making him aware that how much data has been sold over time for using technology.</p>
    </div>
    <div className="data-services__main">
      <p >Following diagram shows David’s stats over 5 months. Data has been sold to trustworthy companies. Data being sold is normal in most of cases.</p>
      <img className="data-services__graph" src={RoughGraph} />
    </div>
    <div div className="data-services__foot">
      <img src={warningIcon}/>
      <p>Data of one account linked to yours has been sold to a unknown organization.</p>
    </div>
  </section>
  )
};

export default DataServices;
