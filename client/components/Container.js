import React, {Component, PropTypes} from 'react'
import ProductList from './ProductList.js'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as AppActions from '../actions/index.js'

class Container extends Component{
  constructor(props, context){
    super(props, context)
  }

  componentDidMount(){
    this.props.actions.loadProducts()
  }

  render(){
    let jumbotronStyle ={textAlign:"center", height: "100px", marginTop: "20px"}
    let headingStyle = {marginTop: "auto", marginBottom:"auto"}
    let listStyle = {
      backgroundColor: "#c9efed"
    }

    return (
      <div className="container">
        <div className="jumbotron" style={jumbotronStyle}>
          <h2 style={headingStyle}>Hacktiv8 React Marketplace</h2>
        </div>
        <ProductList data={this.props.data} actions={this.props.actions}/>
        <form>
          <li style={listStyle} className="list-group-item">Add Your Item<br /><br />
          <input className="form-control" placeholder="Name" type = "text" /><br />
          <input className="form-control" placeholder="Summary" type = "text" /><br />
          <input className="form-control" placeholder="Image" type = "text" /><br />
          <input className="form-control" placeholder="Description" type = "textarea" /><br />
          <button type= "submit" className="btn btn-success">Save</button></li>
        </form><br />
      </div>
    )
  }
}

Container.propTypes = {
  data: PropTypes.array.isRequired,
  actions: PropTypes.object
}

function mapStateToProps(state){
  return {data: state.data}
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
