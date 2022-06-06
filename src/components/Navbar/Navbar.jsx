import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="menu">
                <li className="nav__li"><NavLink to="/home" >&#10148; Home</NavLink></li>
                <li className="nav__li"><NavLink to="/profile" >&#10148; Profile</NavLink></li>
                <li className="nav__li"><NavLink to="/chat" >&#10148; Chat</NavLink></li>
            </ul>
        </nav>

    )
}

export default Navbar;