import "./Header.scss"

const Header = () => {
    return (
        <div>
            <nav className="nav">
                <div className="nav__div--logo">
                    <img src="" />
                    <h3>Microsoft Account |</h3>
                </div>
                <div className="nav__div--navbar">
                    <h4 className="">Your Information</h4>
                    <ul className="nav__ul">
                        <li>Privacy</li>
                        <li>Security</li>
                        <li>Payment and Billing</li>
                        <li>Services and Subscriptions</li>
                        <li>Devices</li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;