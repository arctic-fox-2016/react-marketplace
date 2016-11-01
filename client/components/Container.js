import React, {Component, PropTypes} from 'react'
import ProductList from './ProductList.js'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as AppActions from '../actions/index.js'

class Container extends Component{
  constructor(props, context){
    super(props, context)
    this.state = {
      inputName : "",
      inputSummary : "",
      inputImage : "",
      inputDescription : ""
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
    this.props.actions.addProduct(this.state.inputName,this.state.inputSummary,this.state.inputDescription,this.state.inputImage)
    this.setState({
      inputName: "",
      inputSummary: "",
      inputDescription: "",
      inputImage: "",
    })
  }

  render(){
    let jumbotronStyle ={textAlign:"center", height: "100px", marginTop: "20px"}
    let headingStyle = {marginTop: "auto", marginBottom:"auto"}
    let listStyle = {
      backgroundColor: "#c9efed"
    }
    console.log('data',this.props)
    return (
      <div className="container">
        <div className="jumbotron" style={jumbotronStyle}>
          <h2 style={headingStyle}>Hacktiv8 React Marketplace</h2>
        </div>
        <ProductList data={this.props.data} actions={this.props.actions}/>
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

Container.propTypes = {
  data: PropTypes.object.isRequired,
  actions: PropTypes.object,
  totalrecord: PropTypes.number
}

function mapStateToProps(state){
  return {data: state.data, totalrecord: state.data.count}
}

function mapDispatchtoProps(dispatch){
  return {
    actions: bindActionCreators(AppActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(Container)
