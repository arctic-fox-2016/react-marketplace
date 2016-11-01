import React, {Component, PropTypes} from 'react'

class AppTextInput extends Component{
  constructor(props,context){
    super(props,context)
    this.state = {
      name : this.props.name || '',
      phone : this.props.phone || ''
    }
  }

  handleNameChange(e){
    this.setState({name:e.target.value})
  }
  handlePhoneChange(e){
    this.setState({phone:e.target.value})
  }

  handleSubmit(e){
    e.preventDefault()
    var name = this.state.name.trim().toUpperCase()
    var phone = this.state.phone.trim()
    if(!name || !phone){
      return
    }
    this.props.onSave(name,phone)
    this.setState({name:'', phone:''})
  }

  render(){
    const styleTBName = {
      'text-transform': 'uppercase'
    }
    return(
      <form className="form-inline" onSubmit={this.handleSubmit.bind(this)}>
        <div class="form-group">
          <label for="Name"> Name</label>
          <input className="form-control"  type="text" value={this.state.name} onChange={this.handleNameChange.bind(this)} style={styleTBName} />
          <label for="Phone"> Phone</label>
          <input className="form-control"  type="text" value={this.state.phone} onChange={this.handlePhoneChange.bind(this)} />
          <button type="submit" className="btn btn-primary">Save</button>
        </div>
      </form>
    )
  }
}

AppTextInput.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  onSave: PropTypes.func.isRequired
}
export default AppTextInput
