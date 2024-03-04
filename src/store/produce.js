import produceData from "../mockData/produce.json";
const POPULATE = "produce/POPULATE";
const LIKE = "produce/LIKE";

export default function produceReducer(state = {}, action) {
  switch (action.type) {
    case POPULATE:
      const newState = {};
      action.produce.forEach((item) => {
        newState[item.id] = item;
      });
      return newState;
    case LIKE:
      const selected = state[action.item.id];
      return {
        ...state,
        [selected.id]: {
          id: selected.id,
          name: selected.name,
          liked: !selected.liked,
        },
      };
    default:
      return state;
  }
}

export function populateProduce() {
  return {
    type: POPULATE,
    produce: produceData,
  };
}

export function likeItem(item) {
  return {
    type: LIKE,
    item,
  };
}
