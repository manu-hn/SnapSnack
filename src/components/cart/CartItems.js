import AddToCart from "../assets/AddToCart";
import { IMG_API } from "../utils/EnvVariable";
import RemoveItemFromCart from "../assets/RemoveItemFromCart.js";
const CartItems = ({ item, index }) => {
    console.log("Cart Item", item)
    return (
        <div className="w-full flex justify-center m-2">
           <div className="w-3/6  flex justify-between border rounded-md px-2">
           <section className="w-3/4 p-2 items-center flex justify-between mx-2 overflow-hidden">
                <div className="w-36">
                    <img className="rounded w-36 h-24" src={IMG_API + item.card.info.imageId} alt={item.card.info.name} />
                </div>
                <div className="flex justify-start flex-col w-2/4">
                <h1 className="line-clamp-1 font-semibold">{item.card.info.name}</h1>
                <p className="text-sm text-gray-600"> - ₹{item.card.info.price / 100}</p>
                </div>

            </section>
            <div className="flex w-36 items-center justify-between">
                <AddToCart item={item} />
                <RemoveItemFromCart  index={index} />
            </div>
           </div>

        </div>
    )
}

export default CartItems;