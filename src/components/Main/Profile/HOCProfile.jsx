import { connect } from "react-redux";
import Profile from "./Profile";
import { addPost, deletePost, getPosts, updateNewPostText, updateUserProfile } from "../../../store/reducers/profileReducer";

const mapStateToProps = (state) => {
    return {
        my_name: state.profile.my_name,
        user_name: state.profile.user_name,
        posts: state.profile.posts,
        new_post_text: state.profile.new_post_text,
    }  
}

export default connect(mapStateToProps, {getPosts, updateNewPostText, addPost, deletePost, updateUserProfile})(Profile);