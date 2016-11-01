import React, {Component, PropTypes} from 'react'
import DataItem from './DataItem'

class SearchItem extends Component{
  constructor(props, context){
    super(props, context)
  }
  render(){
    
  }
}

ListItem.propTypes = {
  data: PropTypes.array.isRequired,
  actions: PropTypes.object
}
export default SearchItem
