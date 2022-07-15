import axios from "axios";
import { useEffect } from "react";
import HomeUser from "./HomeUser/HomeUser";

const Home = (props) => {

    useEffect(() => {
        if(props.users.length === 0) {
            axios.get("https://jsonplaceholder.typicode.com/users")
            .then((responce) => props.getUsers(responce.data))
        }
    }, [])
    const users = props.users.map((user) => {
        return <HomeUser name={user.name} follow={props.follow} key={user.id} id={user.id} followed={user.followed}></HomeUser>
    })
    return (
        <div className="users-wrap">{users}</div>
    )
}

export default Home;