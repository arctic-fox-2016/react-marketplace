import React, {Component, PropTypes} from 'react'
import Product from './Product.js'

class ProductList extends Component {
  constructor(props, context){
    super(props, context)
  }

  render(){
    const {data, actions} = this.props
    let dataArray = data.map(function(x){
      return <Product key={x._id} name={x.name} summary={x.summary} image={x.image} description={x.description} />
    })
    return (
      <div>
      {dataArray}
      </div>
    )
  }
}

export default ProductList
