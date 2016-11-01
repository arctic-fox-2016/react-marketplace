import React, {Component, PropTypes} from 'react'
import DataItem from './DataItem'

class ListItem extends Component{
  constructor(props, context){
    super(props,context)
    this.state={
      page:1,
      totalRecord:1
    }
  }


render(){
  const {data, actions} = this.props
  var totalRecord = this.props.data.length
  console.log('this',this);
  console.log('totalRecord',totalRecord);
  let nodeData = data.map(function(data){
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
