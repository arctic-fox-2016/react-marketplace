const initialState =[]

export default function data(state=initialState, action){
  switch (action.type){
    case "LOAD_PRODUCTS_TO_STATE":
    return []

    case "LOAD_PRODUCTS_SUCCESS":
    return action.products

    case "LOAD_PRODUCTS_FAIL":
    return state

    default:
    return state
  }
}
