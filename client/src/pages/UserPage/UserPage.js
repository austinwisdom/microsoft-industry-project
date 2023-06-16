import "./UserPage.scss";
import CompleteName from "../../components/Articles/CompleteName/CompleteName";
// import AccountInformation from "../components/Articles/AccountInformation/AccountInformation";
// import CompleteName from "../components/Articles/CompleteName/CompleteName";
// import DataServices from "../components/Articles/DataServices/DataServices";
// import LanguageInformation from "../components/Articles/LanguageInformation/LanguageInformation";
// import ProfileInformation from "../components/Articles/ProfileInformation/ProfileInformation";
// import YourProfiles from "../components/Articles/YourProfiles/YourProfiles";

const UserPage = () => {
  return (
  <div className="user-page">
    {/* <AccountInformation /> */}
    <CompleteName />
    {/* <DataServices />
    <LanguageInformation />
    <ProfileInformation />
    <YourProfiles /> */}
    </div>
  )
}

export default UserPage;               