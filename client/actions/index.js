import * as types from '../constants/ActionTypes'
import request from 'superagent'

const SERVER_URL = 'http://localhost:3001/api/'

export function addData(id,name, price, url){
  return {type: types.ADD_DATA, id, name, price, url}
}

export function deleteData(id){
  return {type: types.DELETE_DATA, id}
}

export function saveData(id,name,price,url){
  return {type: types.UPDATE_DATA, id,name,price,url}
}


export function loadInventories(){
  return dispatch => {
    dispatch(loadData());
    return request
      .get(`${SERVER_URL}inventories`)
      .set('Accept','application/json')
      .end((err,res)=>{
        if(err){
          console.log(err);
          dispatch(loadInventoriesFailure())
        }else{
          dispatch(loadInventoriesSuccess(res.body))
        }
      })
  }
}



export function loadData(){
  return {type: types.LOAD_DATA}
}

export function loadInventoriesFailure(){
  return {type: types.LOAD_INVENTORIES_FAILURE}
}

export function loadInventoriesSuccess(inventories){
  return {type: types.LOAD_INVENTORIES_SUCCESS, inventories}
}


//addData
export function addInventories(name,price,url){
  let id = Date.now()
  return dispatch => {
    dispatch(addData(id,name,price,url))
    return request
      .post(`${SERVER_URL}inventories`)
      .type('form')
      .send({id:id})
      .send({name:name})
      .send({price:price})
      .send({url:url})
      .end((err,res)=> {
        if(err){
          dispatch(addInventoriesFailure())
        }else{
          dispatch(loadInventoriesSuccess(res.body))
        }
      })
  }
}
