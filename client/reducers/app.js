import {ADD_DATA, DELETE_DATA, UPDATE_DATA, LOAD_DATA,LOAD_INVENTORIES_SUCCESS,LOAD_INVENTORIES_FAILURE, ADD_INVENTORIES_SUCCESS, ADD_INVENTORIES_FAILURE,PREPARE_SAVE} from '../constants/ActionTypes'

const initialState ={dataInventories:[], totalRecord:1}

export default function data(state = initialState, action){
  switch (action.type){
    case ADD_DATA:
    let dataArr = state.dataInventories
    console.log('dataArr',dataArr);
    dataArr.push({
      id: action.id,
      name: action.name,
      price: action.price,
      url: action.url
    })
    return dataArr

    case PREPARE_SAVE:
    return state


    case ADD_INVENTORIES_SUCCESS:

    let inventories = state
    let idObject = inventories.map(function(x){
      return x.id
    }).indexOf(action.inventories.id)
    //if id is exist
    if(idObject > -1){
      return state
    }else{
      console.log("actioninv", action.inventories)
      return [action.inventories,...state]
    }


    case DELETE_DATA:
    return state.filter(data => data.id !==action.id)

    case UPDATE_DATA:
      let updatedData = state.map(function(eachData){
        if(action.id==eachData.id){
          eachData.name=action.name
          eachData.price=action.price
          eachData.url=action.url
          return eachData
        } else{
          return eachData
        }
      })
    return updatedData
    case LOAD_DATA:
    return state
    case LOAD_INVENTORIES_SUCCESS:
    return action.inventories

    case LOAD_INVENTORIES_FAILURE:
    case ADD_INVENTORIES_FAILURE:
    return state;

    default:
    return state
  }
}
