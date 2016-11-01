import request from 'superagent'
const SERVER_URL = 'http://localhost:3000/products/'

export function loadProductsToState(){
  return {type: "LOAD_PRODUCTS_TO_STATE"}
}

export function loadProductsSuccess(products){
  return {type: "LOAD_PRODUCTS_SUCCESS", products}
}

export function loadProductsFail(){
  return {type: "LOAD_PRODUCTS_FAIL"}
}

export function addProductToState(product_id, name, summary, description, image){
  return {type: "ADD_PRODUCT_TO_STATE", product_id,name, summary, description, image}
}

export function addProductFail(){
  return {type: "ADD_PRODUCT_FAIL"}
}

export function addProductSuccess(product_id, name, summary, description, image){
  return {type: "ADD_PRODUCT_SUCCESS",product_id,name, summary, description, image}
}

export function addProduct(name, summary, description, image){
  return dispatch => {
    let product_id = Date.now()
    dispatch(addProductToState(product_id, name, summary, description, image))
    return request.post(`${SERVER_URL}`).send({product_id: product_id, name: name, summary: summary, description: description, image: image}).end((err,res)=>{
      if(err){
        console.log(err)
        dispatch(addProductFail())
      } else {
        let product = res.body
        dispatch(addProductSuccess(product.product_id, product.name, product.summary, product.description, product.image))
      }
    })
  }
}

export function loadProducts(){
  console.log('masuk load products')
  return dispatch => {
    dispatch(loadProductsToState())
    return request.get(`${SERVER_URL}`).end((err,res)=>{
      if(err){
        console.log(err)
        dispatch(loadProductsFail())
      } else {
        console.log('masuk loadproduct')
        dispatch(loadProductsSuccess(res.body))
      }
    })
  }
}

export function goToPage(pageNumber){
  return dispatch => {
    return request.get(`${SERVER_URL}${pageNumber}`).end((err,res)=>{
      let pageResult = res.body
      console.log("pageresult",pageResult)
      if(err){
        dispatch({type: "GO_TO_PAGE_FAIL"})
      } else {
        dispatch({type: "GO_TO_PAGE", pageResult})
      }
    })
  }
}
