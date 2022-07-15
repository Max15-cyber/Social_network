import { connect } from "react-redux";
import { follow, getUsers } from "../../../store/reducers/homeReducer";

import Home from "./Home";

const mapStateToProps = (state) => {
    return {
        users: state.home.users
    }  
}

/* const mapDispatchToProps = dispatch => {
    return dispatch(action)
} */


export default connect(mapStateToProps, {getUsers, follow})(Home);






