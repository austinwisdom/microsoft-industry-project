import "./AccountInformation.scss";
import keyIcon from "../../../assets/key-i.png"

const AccountInformation = () => {
  return (
    <section className="account-info"> 
      <h2>Your information</h2> 
      <div className="account-info__password">
        <img className="account-info__key-i" src={keyIcon}/>
        <div >
          <p>Change password</p>
          <p>Security</p>
        </div>
      </div>
    </section>
  )
}

export default AccountInformation;