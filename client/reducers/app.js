// logic utama nanganin gimana cara pengolahan datanya

import {ADD_DATA,DELETE_DATA,UPDATE_DATA,LOAD_DATA,LOAD_ITEMS_FAILURE,ADD_ITEM_SUCCESS,ADD_ITEM_FAILURE,LOAD_ITEMS_SUCCESS} from '../constants/ActionTypes'

const initialState = []


export default function data(state = initialState,action) {
  switch (action.type) {
    case LOAD_DATA:
    return []

    case LOAD_ITEMS_SUCCESS:

    return action.items

    case LOAD_ITEMS_FAILURE:
    return state

    default:
    return state



    case ADD_DATA:
    return [
      {
        id:action.id,
        item:action.item,
        price:action.price
      },
      ...state
    ]

    case ADD_ITEM_SUCCESS:
    let items = state
    let idObject = items.map(function(x){
        return x.id;
    }).indexOf(action.item.id);
    if(idObject > -1) {
      return state
    }else {
      return [
        action.item, ...state
      ]
    }

    case DELETE_DATA:
    return state.filter(data => data.id !== action.id)

    case UPDATE_DATA:
    let dataBaru = state.map(function(eachData){
     if(action.id== eachData.id){
       eachData.name = action.name
       eachData.phone = action.phone
       return eachData
     } else {
       return eachData
      }
    })
   //console.log("dataBaru" ,dataBaru)
   return dataBaru

  }
}
