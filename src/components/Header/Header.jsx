import { NavLink } from "react-router-dom"
import logo from "../../images/logo.jpg"
import FormSearch from "./FormSearch/FormSearch";



const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="logo" className="logo"/> 
            <FormSearch />
            <div className="user-wrap">
                <span className="user__name">Vacya Pupkin</span>
                <b className="user__name__IsInside">Inside</b>
            </div>
        </header>
    )
}

export default Header;