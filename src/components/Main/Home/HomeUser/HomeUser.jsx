import { NavLink } from 'react-router-dom'
import ava from '../../../../images/logo.jpg'

const HomeUser = (props) => {
    return(
        <div>
            <div>
                <NavLink to=''><img src={ava} alt='ava'></img></NavLink>
            </div>
            <div>
                <NavLink to=''>{props.name}</NavLink>
            </div>
            <div>
                <button >Follow</button>
            </div>
        </div>
    )
}


export default HomeUser;