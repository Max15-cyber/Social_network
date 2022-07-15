const GET_POSTS = "get posts"
const UPDATE_NEW_POST_TEXT = "update new post text"
const ADD_POST = "add post"
const DELETE_POST = "delete post"
const UPDATE_USER_PROFILE = "update user profile"


let initialState = {
    my_name: "Vacya Pupkin",
    user_name: "",
    posts: [],
    new_post_text: "",
}



const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return { ...state, posts: [...state.posts, ...action.posts] }
        case UPDATE_NEW_POST_TEXT:
            return { ...state, new_post_text: action.new_post_text }
        case ADD_POST:
            if(action.post.body !== "") {
                return {...state, posts: [...state.posts, action.post], new_post_text: ''}
            }
            return state 
        case DELETE_POST:
            return {...state, posts: state.posts.filter((i) => i.id !== action.id)}
        case UPDATE_USER_PROFILE:
            return {...state, user_name: action.user_name}
        default:
            return state
    }
}

export const getPosts = (posts) => ({ type: GET_POSTS, posts })
export const updateNewPostText = (new_post_text) => ({ type: UPDATE_NEW_POST_TEXT, new_post_text: new_post_text })
export const addPost = (post) => ({ type: ADD_POST, post })
export const deletePost = (id) => ({type: DELETE_POST, id})
export const updateUserProfile = (user_name) => ({type: UPDATE_USER_PROFILE, user_name})

export default profileReducer;