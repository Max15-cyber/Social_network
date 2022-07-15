import classes from './ChatUser.module.scss'

const ChatUser = (props) => {
    return (
        <div className={classes.chatUser}>{props.user}</div>
    )
}


export default ChatUser;