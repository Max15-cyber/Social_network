import { NavLink } from "react-router-dom"
import ChatUser from "./ChatUser/ChatUser"

const Chat = (props) => {
    const users = props.users.map((user) => {
        return <ChatUser user={user}></ChatUser>
    })
    return(
        <div className="chat-wrap">
            <div className="chat-users">Users: {users}</div>
            <div className="chat-messages">
                <div className="main-user">{props.name}</div>
                <div className="messages">{props.message}</div>
            </div>
        </div>
    )
}

export default Chat;