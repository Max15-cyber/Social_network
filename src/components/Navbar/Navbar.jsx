import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li className="nav__li"><NavLink to="/home" />&#10148; Home</li>
                <br />
                <li className="nav__li"><NavLink to="/profile" />&#10148; Profile</li>
                <br />
                <li className="nav__li"><NavLink to="/chat" />&#10148; Chat</li>
            </ul>
        </nav>

    )
}

export default Navbar;