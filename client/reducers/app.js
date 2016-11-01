const initialState ={listProducts:[], count:1}

export default function data(state=initialState, action){
  let lastPage = Math.ceil(state.count/5)
  switch (action.type){
    case "LOAD_PRODUCTS_TO_STATE":
    return {}

    case "LOAD_PRODUCTS_SUCCESS":
    return action.products

    case "LOAD_PRODUCTS_FAIL":
    return state

    case "ADD_PRODUCT_TO_STATE":
    console.log("ini statecount",state.count)
    console.log('ini state add product actionpage', action.page)
    console.log('ini state add product lastpage', lastPage)
    if(action.page == lastPage){
      if(state.listProducts.length <5){
        return {listProducts:[...state.listProducts, {product_id: action.product_id, name: action.name, summary: action.summary, description: action.description, image: action.image}],count: state.count}
      } else {
        return state
      }
    } else {
      return state
    }

    case "ADD_PRODUCT_SUCCESS":
    let currentProducts = state.listProducts
    let newProductExist = currentProducts.map((x)=>{
      return parseInt(x.product_id)
    }).indexOf(parseInt(action.product_id))
    console.log('lastpage', lastPage)
    console.log('actionpage', action.page)
    if(action.page == lastPage){
      if(newProductExist > -1){
        return state
      } else {
        if(state.listProducts.length <5){
          return {listProducts:[...state.listProducts, {product_id: action.product_id, name: action.name, summary: action.summary, description: action.description, image: action.image}], count:state.count+1}
        } else {
          return state
        }
      }
    } else {
      return state
    }


    case "ADD_PRODUCT_FAIL":
    return state

    case "GO_TO_PAGE":
    return action.pageResult

    default:
    return state
  }
}
