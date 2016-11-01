import React, {Component, PropTypes} from 'react'
import Product from './Product.js'

class ProductList extends Component {
  constructor(props, context){
    super(props, context)
    this.state ={
      page: 1
    }
  }

  componentDidMount(){
    this.props.actions.goToPage(this.state.page)
  }

  handlePageChange(e){
    e.preventDefault()
    this.setState({page: e.target.title})
    this.props.actions.goToPage(e.target.title)
  }

  render(){
    const data = this.props.data
    const total_record = data.count
    const actions = this.props.actions
    let dataArray = data.listProducts.map(function(x){
      return <Product key={x.product_id} name={x.name} summary={x.summary} image={x.image} description={x.description} />
    })

    let productPerPage = 5
    let numberOfPage = Math.ceil(total_record/5)
    let arrayPageNumber = []
    for (let i=1; i<=numberOfPage; i++){
      if(this.state.page == i){
        arrayPageNumber.push(<li key={i} className="active"><a title={i} onClick={this.handlePageChange.bind(this)}>{i}</a></li>)
      } else {
        arrayPageNumber.push(<li key={i}><a title={i} onClick={this.handlePageChange.bind(this)}>{i}</a></li>)
      }
    }

    return (
      <div>
      {dataArray}
        <div>
        <nav aria-label="Page navigation">
          <ul className="pagination">
            {arrayPageNumber}
          </ul>
        </nav>
        </div>
      </div>
    )
  }
}

export default ProductList
