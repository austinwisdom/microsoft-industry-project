import "./UserPage.scss";
import AccountInformation from "../components/Articles/AccountInformation/AccountInformation";
import CompleteName from "../components/Articles/CompleteName/CompleteName";
import DataServices from "../components/Articles/DataServices/DataServices";
import LanguageInformation from "../components/Articles/LanguageInformation/LanguageInformation";
import ProfileInformation from "../components/Articles/ProfileInformation/ProfileInformation";
import YourProfiles from "../components/Articles/YourProfiles/YourProfiles";z

const UserPage = () => {
  return (
    <AccountInformation />
    <CompleteName />
    <DataServices />
    <LanguageInformation />
    <ProfileInformation />
    <YourProfiles />
  )
}

export default UserPage;               