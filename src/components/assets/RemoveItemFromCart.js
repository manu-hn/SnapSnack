import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartSlice";

const RemoveItemFromCart = ({ index}) => {
    //     alert("Remove Item");

    const dispatch = useDispatch();

    function removeItem(index) {
        dispatch(removeFromCart(index))
       
    }
    return (
        <>
            <button className="px-2 rounded w-16 h-8 bg-black text-center text-2xl text-white " 
            onClick={() => removeItem(index)}> - </button>
        </>
    )
}

export default RemoveItemFromCart;