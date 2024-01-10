import BackToHome from "../assets/BackToHome.js";
import EmptyCart from "../../images/Cart Empty.png"

const NoItemsInCart = () => {
    
    return (
        <div className="w-full h-[80vh] flex flex-col items-center justify-start">
            <span>
                <img src={EmptyCart} alt="Cart is Empty" />
            </span>

            <h1 className="text-center font-bold text-lg text-gray-600">Your cart is empty</h1>
            <q className="text-gray-400">You can go to home page to view more restaurants</q>
            <span >
                <BackToHome name={'SEE RESTAURANTS NEAR YOU'} />
            </span>


        </div>
    )
}

export default NoItemsInCart;