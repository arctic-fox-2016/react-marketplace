import React, {Component, PropTypes} from 'react'

class SearchText extends Component{
  constructor(props,context){
    super(props,context)
    this.state = {
      name : this.props.name || '',
      phone : this.props.phone || ''
    }
  }

  handleNameChange(e){
    var name = e.target.value.toUpperCase()
    this.props.searchDataName(name)
    this.setState({name:e.target.value})
  }
  handlePhoneChange(e){
    var phone = e.target.value
    this.props.searchDataPhone(phone)
    this.setState({phone:e.target.value})
  }


  render(){
    const styleTBName = {
      'text-transform': 'uppercase'
    }
    return(
        <div className="form-inline">
          <div className="form-group">
            <label for="Name"> Name</label>
            <input className="form-control"  type="text" value={this.state.name} onChange={this.handleNameChange.bind(this)} style={styleTBName} />
            <label for="Phone"> Phone</label>
            <input className="form-control"  type="text" value={this.state.phone} onChange={this.handlePhoneChange.bind(this)} />
          </div>
        </div>
    )
  }
}

SearchText.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  searchDataPhone: PropTypes.func.isRequired
}
export default SearchText
