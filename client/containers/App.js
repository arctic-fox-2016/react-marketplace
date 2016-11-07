import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import ListItem from '../components/ListItem'
import AppTextInput from '../components/AppTextInput'
import SearchText from '../components/SearchText'
import * as AppActions from '../actions'

class App extends Component{
  constructor(props,context){
    super(props,context)
    this.state={
      page:1
    }
  }

  componentDidMount(){
    this.props.actions.loadInventories(this.state.page)
  }
  render(){
      const data = this.props.data
      const actions = this.props.actions
      console.log('dataariadiprana',data);
      return(
      <div>
        <div className="container">

          <div className="panel panel-primary">
            <div className="panel-heading">
              <center>
                  <h1>Marketplace Hactiv8</h1>
                  <img src="img/market.jpg" width="900px"/>
              </center>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">Add Products</div>
            <div className="panel-body">
              <AppTextInput name="" price="" url="" onSave={actions.addInventories}/>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-body">
                  <ListItem data={data} actions={actions} />
            </div>
          </div>


        </div>
      </div>

      )
  }
}


App.propTypes = {
  data: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  totalrecord: PropTypes.number
}

function mapStateToProps(state){
  return {data: state.data,totalrecord: state.data.totalRecord}
}

function mapDispatchToProps(dispath){
  return {
    actions:bindActionCreators(AppActions, dispath)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
