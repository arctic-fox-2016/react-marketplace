import {ADD_DATA, DELETE_DATA, UPDATE_DATA, SEARCH_DATA_NAME, SEARCH_DATA_PHONE,LOAD_DATA,LOAD_PHONEBOOKS_SUCCESS,LOAD_PHONEBOOKS_FAILURE, ADD_PHONEBOOKS_SUCCESS, ADD_PHONEBOOKS_FAILURE} from '../constants/ActionTypes'

const initialState = []

export default function data(state = initialState, action){
  switch (action.type){
    case ADD_DATA:
    return [
      {
        id: action.id,
        name: action.name,
        phone: action.phone
      },
      ...state
    ]

    case ADD_PHONEBOOKS_SUCCESS:
    let phonebooks = state
    let idObject = phonebooks.map(function(x){
      return x.id
    }).indexOf(action.phonebooks.id)
    //if id is exist
    if(idObject > -1){
      return state
    }else{
      return [action.phonebook,...state]
    }


    case DELETE_DATA:
    return state.filter(data => data.id !==action.id)

    case UPDATE_DATA:
      let updatedData = state.map(function(eachData){
        if(action.id==eachData.id){
          eachData.name=action.name
          eachData.phone=action.phone
          return eachData
        } else{
          return eachData
        }
      })
    return updatedData
    case LOAD_DATA:
    return []
    case LOAD_PHONEBOOKS_SUCCESS:
    return action.phonebooks

    case LOAD_PHONEBOOKS_FAILURE:
    case ADD_PHONEBOOKS_FAILURE:
    return state;

    default:
    return state



  }
}
