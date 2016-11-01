import React, {Component, PropTypes} from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';  // in ECMAScript 6

class DataItem extends Component{
  constructor(props,context){
    super(props, context) //super harus dijalanin kalau extend class lain
    this.state = {
      id :this.props.data.id,
      item: this.props.data.item || '',
      price: this.props.data.price || '',
      update: false
    }
  }

  update(){
    this.setState({update:true})
    //console.log(this.state.update);
  }

  handleItemChange(e){
    this.setState({item: e.target.value})
  }
  handlePriceChange(e){
    this.setState({price: e.target.value})
  }
  updated(e){

    e.preventDefault()
    var id = this.state.id
    var item = this.state.item
    var price = this.state.price
    this.props.updateData(id,item,price)
    this.setState({update:false})
  }
  render(){
    const {data, deleteData} = this.props
    const listStyle = {
      'color' : '#ffffff',
      'backgroundColor' : '#000000'
    }
    if(this.state.update){
      return(

        <form>
          <tr>
            <th scope="row">1</th>
            <td><input type="text" className="form-control"value={this.state.item} onChange={this.handleItemChange.bind(this)} /></td>
          <td><input type="text" className="form-control" value={this.state.price} onChange={this.handlePriceChange.bind(this)} />
          </td>
          <td><input type="hidden" value={data.id} onChange={this.handlePriceChange.bind(this)} /></td>
          <td><button type="submit" className="btn btn-primary" onClick={this.updated.bind(this)}>Save</button>
          </td>
          </tr>
       </form>
      )
    }
    else {
    }
    return(
      <tr> <th scope="row">1</th> <td>{data.item}</td> <td>{data.price}</td> <td><button className="btn btn-danger" type="button" onClick={()=>deleteData(data.id)}>delete</button>
      <button className="btn btn-success" onClick={this.update.bind(this)}>Update</button></td> </tr>
    )
  }
}


DataItem.propTypes = {
  data: PropTypes.object.isRequired,
  deleteData: PropTypes.func.isRequired
}

export default DataItem
