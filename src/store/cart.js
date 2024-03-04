const ADDTOCART = "cart/ADDTOCART";
const INCREASEITEM = "cart/INCREASEITEM";
const DECREASEITEM = "cart/DECREASEITEM";
const SETITEMCOUNT = "cart/SETITEMCOUNT";
const REMOVEITEM = "cart/REMOVEITEM";
const CLEARCART = "cart/CLEARCART";

export default function cartReducer(state = {}, action) {
  switch (action.type) {
    case ADDTOCART:
      return {
        ...state,
        [action.item.id]: {
          id: action.item.id,
          count: 1,
        },
      };
    case INCREASEITEM: {
      const currentItem = state[action.item.id];
      const newItem = {
        id: currentItem.id,
        count: currentItem.count + 1,
      };
      return { ...state, [action.item.id]: newItem };
    }
    case DECREASEITEM: {
      const currentItem = state[action.item.id];
      if (currentItem.count === 1) {
        const newState = { ...state };
        delete newState[action.item.id];
        return newState;
      } else {
        const newItem = {
          id: currentItem.id,
          count: currentItem.count - 1,
        };
        return { ...state, [action.item.id]: newItem };
      }
    }
    case SETITEMCOUNT: {
      const currentItem = state[action.payload.item.id];
      const newItem = {
        id: currentItem.id,
        count: action.payload.count,
      };
      return { ...state, [action.payload.item.id]: newItem };
    }
    case REMOVEITEM: {
      const newState = { ...state };
      delete newState[action.item.id];
      return newState;
    }

    case CLEARCART:
      return {};

    default:
      return state;
  }
}

export function addToCart(item) {
  return {
    type: ADDTOCART,
    item,
  };
}

export function increaseItem(item) {
  return {
    type: INCREASEITEM,
    item,
  };
}

export function decreaseItem(item) {
  return {
    type: DECREASEITEM,
    item,
  };
}

export function setItemCount(item, count) {
  return {
    type: SETITEMCOUNT,
    payload: { item, count },
  };
}

export function removeItem(item) {
  return {
    type: REMOVEITEM,
    item,
  };
}

export function clearCart() {
  return {
    type: CLEARCART,
  };
}
