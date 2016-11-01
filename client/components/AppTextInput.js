import React, {Component, PropTypes} from 'react'

class AppTextInput extends Component{
  constructor(props,context){
    super(props,context)
    this.state = {
      id: this.props.id || '',
      name : this.props.name || '',
      price : this.props.price || '',
      url : this.props.url || ''
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

  handleSubmit(e){
    e.preventDefault()
    var name = this.state.name.trim().toUpperCase()
    var price = this.state.price.trim()
    var url = this.state.url.trim()
    if(!name || !price || !url){
      return
    }
    this.props.onSave(name,price,url)
    this.setState({name:'', price:'', url:''})
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
          <label for="Price"> Price</label>
          <input className="form-control"  type="text" value={this.state.price} onChange={this.handlePriceChange.bind(this)} />
          <label for="Price"> URL</label>
          <input className="form-control"  type="text" value={this.state.url} onChange={this.handleUrlChange.bind(this)} />
          <button type="submit" className="btn btn-primary">Save</button>
        </div>
      </form>
    )
  }
}

AppTextInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  url: PropTypes.string,
  onSave: PropTypes.func.isRequired
}
export default AppTextInput
