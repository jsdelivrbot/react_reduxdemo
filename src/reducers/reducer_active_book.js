// State argument is not application state, only the state
// this reducer is responsible for
export default function(state = null, action) {
  switch (action.type) {
    case "BOOK_SELECTED":
      console.log(action, "action");
      console.log(state, "state");
      return action.payload;
  }
  console.log(state, "state");
  return state;
}
