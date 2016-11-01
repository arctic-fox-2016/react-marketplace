import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import ListItem from '../components/ListItem'
import AppTextInput from '../components/AppTextInput'
import NavBar from '../components/NavBar'

import * as AppActions from '../actions'

class App extends Component{
  componentDidMount(){
    this.props.actions.loadItems()
  }
  render(){
      const {data,actions} = this.props

      return(
        <div className="container">
          <NavBar item="" price="" />
            <div className="panel panel-primary">
              <div className="panel-heading"> <h3 className="panel-title">Store </h3>
              </div>
              <div className="panel-body">
                <div className="bs-example" data-example-id="striped-table"> <table className="table table-striped"> <thead> <tr> <th>#</th> <th>Item</th> <th>Price</th> <th>Menu</th> </tr> </thead>
                  <ListItem data={data} actions={actions} />

                    </table>
                </div>

              </div>

            </div>
            <AppTextInput item="" price="" onSave={actions.addItem} />

        </div>
      )
  }
}


App.propTypes = {
  data: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state){
  return {data: state.data}
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
