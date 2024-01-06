import NavBar from "./components/NavBar";
import './global.css';
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./components/store/appStore";

const App = () => {
    return (
        <Provider store={appStore}>
            <div className="">
                <NavBar />
                <Outlet />
            </div>
        </Provider>
    )
}

export default App;