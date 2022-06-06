import { NavLink } from "react-router-dom"
import HomeUser from "./HomeUser/HomeUser";

const Home = (props) => {
    const users = props.users.map((user) => {
        <HomeUser name={user.name} key={user.id}></HomeUser>
    })
    return (
        <div>{users}</div>
    )
}

export default Home;