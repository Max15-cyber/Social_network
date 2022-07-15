import axios from 'axios'
import { NavLink } from 'react-router-dom'
import ava from '../../../../images/logo.jpg'
import classes from './HomeUser.module.scss'

const HomeUser = (props) => {
    const follow = (e, id, followed) => {
        e.target.disabled = true
        axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, {
            body: JSON.stringify({
              id,
              userId: id,
              followed,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => JSON.parse(response.data.body))
            .then((user) => props.follow(user.id, user.followed))
            .then(() => e.target.disabled = false)
    }
    return (
        <div className={`user ${classes.user}`}>
            <div>
                <NavLink to={`/profile/${props.id}`}><img src={ava} alt='ava' className={classes.ava}></img></NavLink>
            </div>
            <div>
                <NavLink to={`/profile/${props.id}`} className={classes.name}>{props.name}</NavLink>
            </div>
            <div>
                {
                    props.followed ?
                        <button className={classes.follow} type='button' 
                        onClick={(e) => follow(e, props.id, false)}>Unfollow</button>
                        : <button className={classes.follow} type='button' 
                        onClick={(e) => follow(e, props.id, true)}>Follow</button>
                }

            </div>
        </div>
    )
}


export default HomeUser;