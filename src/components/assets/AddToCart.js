import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
const AddToCart = ({ item,  }) => {

    const dispatch = useDispatch();

    function addItemToCart(menuItem) {
        dispatch(addToCart(menuItem)); 
    }

    return (
        <>
            <button className="px-2 rounded w-16 h-8 bg-black text-white  font-bold text-xl text-center"
                onClick={() => addItemToCart(item)}>+</button>
        </>
    )
}
export default AddToCart;