import { useDispatch, useSelector } from "react-redux";
import { addToCart, increaseItem } from "../../store/cart";
import { useEffect } from "react";
import { likeItem } from "../../store/produce";

function ProduceDetails({ produce }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  function handleCartClick() {
    if (cart[produce.id]) {
      dispatch(increaseItem(produce));
    } else {
      dispatch(addToCart(produce));
    }
  }
  function toggleLike() {
    dispatch(likeItem(produce));
  }

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
          onClick={toggleLike}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cart ? " selected" : "")}
          onClick={handleCartClick}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;
