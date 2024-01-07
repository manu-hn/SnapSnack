import BackToHome from "../assets/BackToHome.js";
const PleaseLoginToContinue = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="w-2/5 flex flex-col items-center mt-12">
                <h1>Don't miss out on the feast!</h1>
                <h2>Sign in to continue and explore the world of foods.</h2>
                <BackToHome name={'Sign In'} path={'/login'} />
            </div>
        </div>
    )
}

export default PleaseLoginToContinue;