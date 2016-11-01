import React, {Component, PropTypes} from 'react'
import DataItem from './DataItem'

class ListItem extends Component{
  constructor(props, context){
    super(props,context)
  }


render(){
  const {data, actions} = this.props
  console.log('this.data', data)
  let nodeData = data.map(function(data){
    console.log('iya')
    return(
        <DataItem key={data.id} data={data} {...actions}/>
    )
  })
  return(
    <table className="table table-striped">
      <tr>
        <th>#</th><th>Name</th><th>Price</th><th>Product</th><th>Actions</th>
      </tr>
        {nodeData}
      </table>

    )
  }
}

ListItem.propTypes = {
  data: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default ListItem
