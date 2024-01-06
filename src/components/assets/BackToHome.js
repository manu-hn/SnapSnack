import { Link } from "react-router-dom";

const BackToHome = ({name}) => {
    return (
        <div>
            <Link to={'/'}>
                <button className="font-semibold text-white text-md px-6 rounded-sm py-2 m-2 bg-orange-500">{name ? name : "🔙  Home"}</button>
            </Link>
        </div>
    )
}

export default BackToHome;