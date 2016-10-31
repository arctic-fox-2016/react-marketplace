import React, {Component, PropTypes} from 'react'

class Product extends Component {
  constructor(props, context){
    super(props, context)
  }

  render(){
    let imageStyle = {
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto",
      borderRadius: "25px",
      background: "#e0ecff",
      padding: "20px",
    }

    let rowStyle = {
      marginTop: "20px",
      marginBottom: "20px"
    }

    return(
      <div className="row" style={rowStyle}>
        <div className="col-lg-4">
          <img className="img-rounded" style={imageStyle} src={this.props.image} />
        </div>
        <div className="col-lg-8">
          <div className="panel panel-default">
          <div className="panel-heading">Nama Barang</div>
          <div className="panel-body">
          {this.props.name}
          </div>
          </div>
          <div className="panel panel-default">
          <div className="panel-heading">Summary</div>
          <div className="panel-body">
          {this.props.summary}
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Product
