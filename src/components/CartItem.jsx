
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div>

      <div className="max-w-[600px] mx-auto">

        <div className="w-[200px] mx-auto">
          <img src={item.image} />
        </div>
        <div>
          <h1>{item.title}</h1>
          <h1 className="text-xs mt-[7px]">{item.description}</h1>
          <div>
            <p>{item.price}</p>
            <div className="mx-auto"
            onClick={removeFromCart}>
              <FcDeleteDatabase/>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
