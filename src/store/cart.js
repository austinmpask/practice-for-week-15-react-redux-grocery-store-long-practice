const ADDTOCART = "cart/ADDTOCART";

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
