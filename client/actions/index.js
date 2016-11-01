import * as types from '../constants/ActionTypes'
import request from 'superagent'

const SERVER_URL = 'http://localhost:3001/api/'

export function addData(id,name, phone){
  return {type: types.ADD_DATA, id, name, phone}
}

export function deleteData(id){
  return {type: types.DELETE_DATA, id}
}

export function saveData(id,name,phone){
  return {type: types.UPDATE_DATA, id,name,phone}
}

export function searchDataName(name){
  return {type: types.SEARCH_DATA_NAME,name}
}

export function searchDataPhone(phone){
  return {type: types.SEARCH_DATA_PHONE,phone}
}

export function loadPhoneBooks(){
  return dispatch => {
    dispatch(loadData());
    return request
      .get(`${SERVER_URL}phonebooks`)
      .set('Accept','application/json')
      .end((err,res)=>{
        if(err){
          console.log(err);
          dispatch(loadPhoneBooksFailure())
        }else{
          dispatch(loadPhoneBooksSuccess(res.body))
        }
      })
  }
}



export function loadData(){
  return {type: types.LOAD_DATA}
}

export function loadPhoneBooksFailure(){
  return {type: types.LOAD_PHONEBOOKS_FAILURE}
}

export function loadPhoneBooksSuccess(phonebooks){
  return {type: types.LOAD_PHONEBOOKS_SUCCESS, phonebooks}
}


//addData
export function addPhoneBooks(name,phone){
  let id = Date.now()
  return dispatch => {
    dispatch(addData(id,name,phone))
    return request
      .post(`${SERVER_URL}phonebooks`)
      .type('form')
      .send({id:id})
      .send({name:name})
      .send({phone:phone})
      .end((err,res)=> {
        if(err){
          dispatch(addPhoneBookFailure())
        }else{
          dispatch(addPhoneBookSuccess(res.body))
        }
      })
  }
}

export function addPhoneBookFailure(){
  return {types:ADD_PHONEBOOKS_FAILURE}
}

export function addPhoneBookSuccess(phonebook){
  return {types:ADD_PHONEBOOKS_SUCCESS, phonebook}
}
