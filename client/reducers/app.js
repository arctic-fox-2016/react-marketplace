const initialState ={listProducts:[], count:1}

export default function data(state=initialState, action){
  switch (action.type){
    case "LOAD_PRODUCTS_TO_STATE":
    return {}

    case "LOAD_PRODUCTS_SUCCESS":
    return action.products

    case "LOAD_PRODUCTS_FAIL":
    return state

    case "ADD_PRODUCT_TO_STATE":
    console.log("ini statecount",state.count)
    return {listProducts:[...state.listProducts, {product_id: action.product_id, name: action.name, summary: action.summary, description: action.description, image: action.image}],count: state.count}

    case "ADD_PRODUCT_SUCCESS":
    let currentProducts = state.listProducts
    let newProductExist = currentProducts.map((x)=>{
      return parseInt(x.product_id)
    }).indexOf(parseInt(action.product_id))


    if(newProductExist > -1){
      return state
    } else {
      return [...state.listProducts, {product_id: action.product_id, name: action.name, summary: action.summary, description: action.description, image: action.image}]
    }

    case "ADD_PRODUCT_FAIL":
    return state

    case "GO_TO_PAGE":
    return action.pageResult

    default:
    return state
  }
}
