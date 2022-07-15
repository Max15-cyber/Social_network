import axios from "axios"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import ava from "../../../images/logo.jpg"
import { updateUserProfile } from "../../../store/reducers/profileReducer"
import Post from "./Post/Post"

const UserProfile = (props) => {
    let params = useParams()
    const getUserProfile = () => {
        let id = params.id
        if (id) {
            axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
              .then((response) => props.updateUserProfile(response.data.name)) 
        } else {
            props.updateUserProfile(props.my_name)
        }
    }
    useEffect(() => {
        if (props.posts.length === 0) {
            /*             fetch('https://jsonplaceholder.typicode.com/posts')
                            .then(response => response.json())
                            .then(posts => props.getPosts(posts)) */
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(posts => props.getPosts(posts.data))

        }
        getUserProfile()
    }, [])



    const newPostChange = (event) => {
        props.updateNewPostText(event.target.value)
    }


    const addPost = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            body: JSON.stringify({
                title: props.new_post_text,
                body: props.new_post_text,
                userId: 1,
                id: props.posts[props.posts.length - 1].id + 1
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => JSON.parse(response.data.body))
            .then((post) => props.addPost(post));
    }


    const deletePost = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(() => props.deletePost(id));

    }
    const posts = props.posts.map((post) => {
        const body = post.body[0].toUpperCase() + post.body.slice(1)
        return <Post key={post.id} id={post.id} post={body} deletePost={deletePost}></Post>
    })
        .reverse()
    return (
        <>
            <div className="wrap-profile-wrap">
                <div className="profile-wrap">
                    <div><img src={ava} alt="ava" className="ava" /></div>
                    <div><span className="user-name">{props.user_name}</span></div>
                </div>
            </div>
            <div className="add-post-wrap">
                <textarea name="" id="" placeholder="Enter post text" className="add-post-text-area"
                    value={props.new_post_text}
                    onChange={newPostChange}></textarea>
                <button className="add-post-button" onClick={addPost}>Add post</button>
            </div>
            <div className="posts">{posts}</div>
        </>
    )
}

export default UserProfile;