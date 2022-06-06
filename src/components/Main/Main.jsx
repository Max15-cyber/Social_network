import { NavLink, Route, Routes} from "react-router-dom";
import Home from "./Home/Home";
import Profile from "./Profile/Profile";
import Chat from "./Chat/Chat";

const Main = () => {
    return (
        <main className="main">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='home' element={<Home />} />
                <Route path='profile/*' element={<Profile />} />
                <Route path='chat' element={<Chat />} />
            </Routes>
        </main>

    )
}

export default Main;