import React, {Component, PropTypes} from 'react'

class SearchText extends Component{
  constructor(props,context){
    super(props,context)
    this.state = {
      name : this.props.name || '',
      price : this.props.price || '',
      url : this.props.url || ''
    }
  }

  handleNameChange(e){
    var name = e.target.value.toUpperCase()
    this.props.searchDataName(name)
    this.setState({name:e.target.value})
  }
  handlePriceChange(e){
    var price = e.target.value
    this.props.searchDataPrice(price)
    this.setState({price:e.target.value})
  }
  handleUrlChange(e){
    var url = e.target.url
    this.props.searchDataUrl(url)
    this.setState({url:e.target.value})
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
            <label for="Price"> Price</label>
            <input className="form-control"  type="text" value={this.state.price} onChange={this.handlePriceChange.bind(this)} />
            <label for="Price"> URL</label>
            <input className="form-control"  type="text" value={this.state.url} onChange={this.handleUrlChange.bind(this)} />
          </div>
        </div>
    )
  }
}

SearchText.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  searchDataPrice: PropTypes.func.isRequired,
  searchDataName: PropTypes.func.isRequired,
  searchDataUrl: PropTypes.func.isRequired
}
export default SearchText
