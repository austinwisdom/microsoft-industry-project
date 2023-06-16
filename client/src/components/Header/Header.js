import { NavLink } from "react-router-dom";

import questionIcon from "../../assets/icons/question-mark.svg"

import "./Header.scss"

const Header = () => {
    return (
        <div>
            <nav className="nav">
                <div className="nav__div--logo">
                    <img src="" />
                    <NavLink><h3>Microsoft Account |</h3></NavLink>
                </div>
                <div className="nav__div--navbar">
                    <NavLink><h4 className="">Your Information</h4></NavLink>
                    <ul className="nav__ul">
                        <NavLink><li>Privacy</li></NavLink>
                        <NavLink><li>Security</li></NavLink>
                        <NavLink><li>Payment and Billing</li></NavLink>
                        <NavLink><li>Services and Subscriptions</li></NavLink>
                        <NavLink><li>Devices</li></NavLink>
                    </ul>
                </div>
                <div>
                    <img src={questionIcon} />
                </div>
            </nav>
        </div>
    );
};

export default Header;