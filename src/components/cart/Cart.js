import { useSelector } from "react-redux";
import CartItems from "./CartItems.js";
import NoItemsInCart from "./NoItemsInCart.js";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);


    if (cartItems.length === 0) return <NoItemsInCart />;

    const totalPrice = cartItems.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.card.info.price;
    }, 0);
    return (
        <div className=" w-full items-center flex flex-col">
            <div className="w-full">
                {
                    cartItems.map((item, index) => {
                        console.log("Checking for name ", item)
                        return <CartItems index={index} key={item.card.info.id} item={item} />
                    })
                }
            </div>
            <div className="w-1/4 flex justify-center">
                <span className="">
                <h1 className="font-semibold "> Total Price - ₹ {totalPrice / 100}</h1>
                </span>
            </div>
        </div>
    )
}

export default Cart;