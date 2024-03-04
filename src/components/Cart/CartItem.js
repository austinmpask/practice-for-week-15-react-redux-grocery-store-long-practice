import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  increaseItem,
  decreaseItem,
  setItemCount,
  removeItem,
} from "../../store/cart";

function CartItem({ item }) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(item.count);

  function increment() {
    dispatch(increaseItem(item));
  }

  function decrement() {
    dispatch(decreaseItem(item));
  }

  function setGlobalCount(event) {
    const newCount = parseInt(event.target.value);
    setCount(newCount);
    dispatch(setItemCount(item, newCount));
  }

  function remove() {
    dispatch(removeItem(item));
  }

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input type="number" value={count} onChange={setGlobalCount} />
        <button className="cart-item-button" onClick={increment}>
          +
        </button>
        <button className="cart-item-button" onClick={decrement}>
          -
        </button>
        <button className="cart-item-button" onClick={remove}>
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;
