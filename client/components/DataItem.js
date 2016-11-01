import React, {Component, PropTypes} from 'react'

class DataItem extends Component{
  constructor(props,context){
    super(props, context) //super harus dijalanin kalau extend class lain
    this.state = {
      id: this.props.data.id,
      name: this.props.data.name || '',
      price: this.props.data.price || '',
      url: this.props.data.url || '',
      update: false
    }
  }

  handleNameChange(e){
    this.setState({name:e.target.value})
  }

  handlePriceChange(e){
    this.setState({price:e.target.value})
  }

  handleUrlChange(e){
    this.setState({url:e.target.value})
  }

  handleSave(e){
    e.preventDefault()
    var name = this.state.name.trim().toUpperCase()
    var price = this.state.price.trim()
    var url = this.state.url.trim()
    var id = this.state.id
    this.props.saveData(id,name,price,url)
    this.setState({update:false})
  }

  editData(e){
    e.preventDefault()
    var name = this.state.name.trim().toUpperCase()
    var price = this.state.price.trim()
    var url = this.state.url.trim()
    var id = this.state.id
    this.setState({update:true})

  }

  render(){
    const {data, deleteData} = this.props
    const liStyle = {
      'color' : '#ffffff',
      'backgroundColor' : '#000000'
    }
    if(!this.state.update){
      return(
        <tr>
          <td>{data.id}</td>
          <td>{data.name}</td>
          <td>{data.price}</td>
          <td><img src={`${data.url}`} width="40px"/></td>
          <td>
            <button className="btn btn-success" type="button" onClick={this.editData.bind(this)}>edit</button>
            <button className="btn btn-danger" type="button" onClick={()=>deleteData(data.id)}>delete</button>
          </td>
        </tr>
      )
    }
    else if(this.state.update){
      return(
        <tr>
          <td>{data.id}</td>
          <td>
            <input className="form-control"  type="text" value={this.state.name} onChange={this.handleNameChange.bind(this)}/>
          </td>
          <td>
            <input className="form-control"  type="hidden" value={this.state.id}/>
            <input className="form-control"  type="text" value={this.state.price} onChange={this.handlePriceChange.bind(this)}/>
          </td>
          <td>
            <input className="form-control"  type="text" value={this.state.url} onChange={this.handleUrlChange.bind(this)}/>
          </td>
          <td>
            <button className="btn btn-primary" type="button" onClick={this.handleSave.bind(this)}>save</button>
          </td>
        </tr>
      )
    }
  }
}


DataItem.propTypes = {
  data: PropTypes.object.isRequired,
  deleteData: PropTypes.func.isRequired
}

export default DataItem
