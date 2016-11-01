
import React, {Component, PropTypes} from 'react'
class AppTextInput extends Component{
  constructor(props, context){
    super(props, context)
    this.state = {
      item: this.props.item || '',
      price: this.props.price || ''
    }
  }
  handleItemChange(e){
    console.log("Handle Item Change");
    this.setState({item: e.target.value})
  }
  handlePriceChange(e){
    console.log("Handle Price Change");
    this.setState({price: e.target.value})
  }
  handleSubmit(e){
    console.log("Jalankan Submit");
    e.preventDefault()
    var item = this.state.item.trim()
    var price = this.state.price.trim()
    console.log("item",item);
    console.log("price",price);
    if(!item || !price) return
    this.props.onSave(item, price)
    this.setState({
      item: '',
      price: ''
    })
  }
  render(){
    return(
      <div className="row">
        <div className="col-md-12">
          <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                  <label >Item</label>
                    <input type="text" className="form-control" value={this.state.item} onChange={this.handleItemChange.bind(this)} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                  <label>Price</label>
                    <input type="text" className="form-control" value={this.state.price} onChange={this.handlePriceChange.bind(this)} />
                  </div>
                </div>
              </div>
            <br/>

          <button type="submit" className="btn btn-primary">Save</button>

          </form>
        </div>

      </div>

    )
  }
}
AppTextInput.propTypes = {
  item: PropTypes.string,
  price: PropTypes.string,
  onSave: PropTypes.func.isRequired
}
export default AppTextInput
