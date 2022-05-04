import { legacy_createStore as createStore } from "redux";
import { countReducer } from "./reducer"
const init = {
    counter: 0,
    todos:[]
}
export const store = createStore(countReducer, init)



// store.subscribe(() => {
//     console.log("Subscribe",store.getState())
// })