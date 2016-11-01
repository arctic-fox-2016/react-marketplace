import React, {Component, PropTypes} from 'react'

class DataItem extends Component{
  constructor(props,context){
    super(props, context) //super harus dijalanin kalau extend class lain
    this.state = {
      id: this.props.data.id,
      name: this.props.data.name || '',
      phone: this.props.data.phone || '',
      update: false
    }
  }

  handleNameChange(e){
    this.setState({name:e.target.value})
  }

  handlePhoneChange(e){
    this.setState({phone:e.target.value})
  }

  handleSave(e){
    e.preventDefault()
    var name = this.state.name.trim().toUpperCase()
    var phone = this.state.phone.trim()
    var id = this.state.id
    this.props.saveData(id,name,phone)
    this.setState({update:false})
  }

  editData(e){
    e.preventDefault()
    var name = this.state.name.trim().toUpperCase()
    var phone = this.state.phone.trim()
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
          <td>{data.phone}</td>
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
            <input className="form-control"  type="text" value={this.state.phone} onChange={this.handlePhoneChange.bind(this)}/>
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
