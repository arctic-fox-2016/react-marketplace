import React, {Component, PropTypes} from 'react'
import Product from './Product.js'

class ProductList extends Component {
  constructor(props, context){
    super(props, context)
    this.state ={
      page: 1,
      inputName : "",
      inputSummary : "",
      inputImage : "",
      inputDescription : "",
      numberOfData: 1
    }
  }

  componentDidUpdate(){
    if(this.state.numberOfData >= this.props.count){

    } else {
      this.setState({numberOfData: this.props.count})
    }
  }

  handleInputNameChange(e){
    this.setState({inputName: e.target.value})
  }

  handleInputSummaryChange(e){
    this.setState({inputSummary: e.target.value})
  }

  handleInputImageChange(e){
    this.setState({inputImage: e.target.value})
  }

  handleInputDescriptionChange(e){
    this.setState({inputDescription: e.target.value})
  }

  handleSubmitNewProduct(e){
    e.preventDefault()
    this.props.actions.addProduct(this.state.inputName,this.state.inputSummary,this.state.inputDescription,this.state.inputImage, this.state.page)
    this.setState({
      inputName: "",
      inputSummary: "",
      inputDescription: "",
      inputImage: "",
    })
    this.setState({numberOfData: this.state.numberOfData+1})
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
    console.log('thisprops',this.props)
    const data = this.props.data
    const total_record = data.count
    const actions = this.props.actions
    let dataArray = data.listProducts.map(function(x){
      return <Product key={x.product_id} name={x.name} summary={x.summary} image={x.image} description={x.description} />
    })

    console.log('jumlah data',this.state.numberOfData)
    let productPerPage = 5
    let numberOfPage = Math.ceil(this.state.numberOfData/5)
    let arrayPageNumber = []
    for (let i=1; i<=numberOfPage; i++){
      if(this.state.page == i){
        arrayPageNumber.push(<li key={i} className="active"><a title={i} onClick={this.handlePageChange.bind(this)}>{i}</a></li>)
      } else {
        arrayPageNumber.push(<li key={i}><a title={i} onClick={this.handlePageChange.bind(this)}>{i}</a></li>)
      }
    }
    let listStyle = {
      backgroundColor: "#c9efed"
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
        <form onSubmit={this.handleSubmitNewProduct.bind(this)}>
          <li style={listStyle} className="list-group-item">Add Your Item<br /><br />
          <input className="form-control" placeholder="Name" type = "text" value={this.state.inputName} onChange={this.handleInputNameChange.bind(this)}/><br />
          <input className="form-control" placeholder="Summary" type = "text" value={this.state.inputSummary} onChange={this.handleInputSummaryChange.bind(this)}/><br />
          <input className="form-control" placeholder="Image" type = "text" value={this.state.inputImage} onChange={this.handleInputImageChange.bind(this)}/><br />
          <input className="form-control" placeholder="Description" type = "text" value={this.state.inputDescription} onChange={this.handleInputDescriptionChange.bind(this)}/><br />
          <button type= "submit" className="btn btn-success">Save</button></li>
        </form><br />
      </div>
    )
  }
}

export default ProductList
