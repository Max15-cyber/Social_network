import classes from "./Post.module.scss"

const Post = (props) => {
    return(
        <div className={classes.postWrap}>
            <p className={classes.post}>{props.post}</p>
            <button className={classes.delete} onClick={() => props.deletePost(props.id)}>Delete</button>
        </div>
    )
}

export default Post;