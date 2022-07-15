import { connect } from "react-redux";
import Chat from "./Chat";


const mapStateToProps = (state) => {
    return {
        users: state.chat.users,
        id: state.chat.id,
        name: state.chat.name,
        message: state.chat.message,
    }  
}

export default connect(mapStateToProps, {})(Chat);