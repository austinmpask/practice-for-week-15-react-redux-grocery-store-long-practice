import produceData from "../mockData/produce.json";
const POPULATE = "produce/POPULATE";

export default function produceReducer(state = {}, action) {
  switch (action.type) {
    case POPULATE:
      const newState = {};
      action.produce.forEach((item) => {
        newState[item.id] = item;
      });
      return newState;
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
