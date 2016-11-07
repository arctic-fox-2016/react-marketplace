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

  handlePageChange(e){
    e.preventDefault()
    this.setState({page: e.target.title})
    this.props.actions.loadInventories(e.target.title)
  }

render(){
  const data = this.props.data
  const actions = this.props.actions
  var totalRecord = this.props.data.totalRecord

  console.log('this',this);
  console.log('totalRecord',totalRecord);
  console.log('dataInventories',data.dataInventories);
  let nodeData = data.dataInventories.map(function(data){
    return(
        <DataItem key={data.id} data={data} {...actions}/>
    )
  })
  var jumlahPage = Math.ceil(totalRecord/5)
  var arrPage = []
  for (let i=1; i<=jumlahPage; i++){
    if(this.state.page == i){
      arrPage.push(<li key={i} className="active"><a title={i} onClick={this.handlePageChange.bind(this)}>{i}</a></li>)
    } else {
      arrPage.push(<li key={i}><a title={i} onClick={this.handlePageChange.bind(this)}>{i}</a></li>)
    }
  }
  return(
      <div>
        <table className="table table-striped">
          <tr>
            <th>#</th><th>Name</th><th>Price</th><th>Product</th><th>Actions</th>
          </tr>
            {nodeData}
          </table>
          <nav aria-label="Page navigation">
            <ul className="pagination">
              {arrPage}
            </ul>
          </nav>
      </div>
    )
  }
}

ListItem.propTypes = {
  data: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default ListItem
