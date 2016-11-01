import * as types from '../constants/ActionTypes'
import request from 'superagent'

const SERVER_URL = 'http://localhost:8080/api/'


export function addData(id,item, price){
  return {type: types.ADD_DATA,id, item, price}
}

export function deleteData(id){
  return {type: types.DELETE_DATA,id}
}

export function updateData(id,item,price){
  return {type: types.UPDATE_DATA,id,item,price}
}


export function loadData(){
  return {type:types.LOAD_DATA}
}

export function loadItems(){
  return dispatch => {
    dispatch(loadData())
    return request
  .get(`${SERVER_URL}items`)
  .set('Accept','applications/json')
  .end((err,res)=>{
    if(err) {
      console.error(err)
      dispatch(loadItemsFailure())
    }else{
      dispatch(loadItemsSuccess(res.body))
    }

  })
  }
}


export function loadItemsSuccess(items){
    return {type: types.LOAD_ITEMS_SUCCESS,items}
}

export function loadItemsFailure(){
    return {type: types.LOAD_ITEMS_FAILURE}
}


export function addItem(item, price){
  console.log(item);
  let id = Date.now()
  return dispatch => {
    dispatch(addData(id,item,price))
    return request
    .post(`${SERVER_URL}items`)
    .type('form')
    .send({id:id})
    .send({item:item})
    .send({price:price})
    .end((err,res)=>{
      if(err){
        dispatch(addItemFailure())
        console.log("GAGAL");
      }else{
        console.log("GW MASUKIN YAH");
        dispatch(addItemSuccess(res.body))
      }
    })
  }
}



export function addItemFailure(){
    return {type: types.ADD_ITEM_FAILURE}
}

export function addItemSuccess(item){
    return {type: types.ADD_ITEM_SUCCESS,item}
}
