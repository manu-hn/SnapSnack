import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/userLoginSlice.js";
import Logo from "../../images/MainLogo.png"
import DeliveryLogo from "../../images/Delivery.gif"
import { useNavigate } from "react-router-dom";
import { LOGIN_CREDENTIALS } from "../utils/EnvVariable.js";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState('');
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(LOGIN_CREDENTIALS, { username, password }, { headers: { 'Content-Type': 'application/json' } })
            dispatch(loginUser())
            setMessage("Welcome " + response.data.firstName + " " + response.data.lastName);
            setTimeout(() => {
                setMessage("")
                navigate("/")
            }, 2000)

        } catch (error) {
            setMessage(error.response.data.message)
            setTimeout(() => {
                setMessage("");
            }, 2000)
        }
    }

    return (
        <div className="w-full flex justify-around  items-center m-8 ">

            <div className="w-2/5 flex justify-end">
                <img src={DeliveryLogo} alt="" />
            </div>
            <div className="w-2/4">
                <div className="w-full flex flex-col items-center">
                    <div className="flex m-2 items-center">
                        <img className="w-20" src={Logo} alt="" />
                        <h3 className="font-bold text-2xl">SnapSnack</h3>
                    </div>
                    <h1 className="font-semibold m-2 text-lg text-gray-700">Welcome to SnapSnack!</h1>
                    <p className="text-sm m-2 text-gray-500">Ready to eat? Sign in and let the feast commence.</p>
                </div>
                <form className="w-full  flex flex-col items-center" onSubmit={handleSubmit}>

                    <div className="w-3/4 m-4 flex justify-center">
                        <label htmlFor="username">Username  </label>
                        <input id="username" type="text" value={username} className="border ml-2 px-4 w-2/3 border-black outline-none rounded-md"
                            placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="w-3/4 m-4 flex justify-center">
                        <label htmlFor="password">Password  </label>
                        <input id="password" type="password" value={password} className="border ml-4 px-4 w-2/3 border-black outline-none rounded-md"
                            placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="w-3/4 m-4 flex justify-center">
                        <button className="w-2/4 py-1 text-white rounded-lg border bg-blue-500" type="submit">Login</button>
                    </div>

                </form>
                <h1 className="text-center font-semibold">{message}</h1>
            </div>

        </div>
    )
}

export default Login;