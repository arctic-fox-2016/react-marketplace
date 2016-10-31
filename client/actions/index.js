import request from 'superagent'
const SERVER_URL = 'http://localhost:3000/products'

export function loadProductsToState(){
  return {type: "LOAD_PRODUCTS_TO_STATE"}
}

export function loadProductsSuccess(products){
  return {type: "LOAD_PRODUCTS_SUCCESS", products}
}

export function loadProductsFail(){
  return {type: "LOAD_PRODUCTS_FAIL"}
}


export function loadProducts(){
  return dispatch => {
    dispatch(loadProductsToState())
    return request.get(`${SERVER_URL}`).end((err,res)=>{
      if(err){
        console.log(err)
        dispatch(loadProductsFail())
      } else {
        dispatch(loadProductsSuccess(res.body))
      }
    })
  }
}
