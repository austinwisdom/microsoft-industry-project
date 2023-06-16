import "./CompleteName.scss";

const CompleteName = () => {
  return (
    <section className="complete-name">
      <div className="complete-name__main">
        <div className="complete-name__avatar"></div>
        <div className="complete-name__avatar-change">
          <p>Personalize your account with a picture. Your profile 
          picture will appear in the applications and devices that use
          your Microsoft account.
          </p>
          <button className="complete-name__avatar-btn" >Add a picture</button>
        </div>
      </div>
      <div className="complete-name__bottom">
        <p>Complete Name</p>
        <p>Andrew Roberts</p>
        <p>Edit Name</p>
      </div>
    </section>
  )
}

export default CompleteName;