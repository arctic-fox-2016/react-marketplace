import React, {Component, PropTypes} from 'react'
import ProductList from './ProductList.js'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as AppActions from '../actions/index.js'

class Container extends Component{
  constructor(props, context){
    super(props, context)

  }

  render(){
    let jumbotronStyle ={textAlign:"center", height: "100px", marginTop: "20px"}
    let headingStyle = {marginTop: "auto", marginBottom:"auto"}
    return (
      <div className="container">
        <div className="jumbotron" style={jumbotronStyle}>
          <h2 style={headingStyle}>Hacktiv8 React Marketplace</h2>
        </div>
        <ProductList data={this.props.data} count={this.props.totalrecord} actions={this.props.actions}/>
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
