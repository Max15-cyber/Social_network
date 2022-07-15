import { Route, Routes} from "react-router-dom";
import HOCChat from "./Chat/HOCChat";
import HOCHome from "./Home/HOCHome";
import HOCProfile from "./Profile/HOCProfile";

const Main = () => {
    return (
        <main className="main">
            <Routes>
                <Route path='/' element={<HOCHome />} />
                <Route path='home' element={<HOCHome />} />
                <Route path='profile/*' element={<HOCProfile />} />
                <Route path='chat' element={<HOCChat />} />
            </Routes>
        </main>

    )
}

export default Main;