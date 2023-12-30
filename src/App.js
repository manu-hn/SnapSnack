import NavBar from "./components/NavBar";
import './global.css';
import { Outlet } from "react-router-dom";


const App=()=>{
    return (
        <div className="app">
            <NavBar />
            <Outlet />
        </div>
    )
}

export default App;