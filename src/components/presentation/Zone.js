import React, { Component } from 'react'
import styles from './styles'

class Zone extends Component {
  onSelctTitle(event){
    event.preventDefault()
    console.log('i Am clicked!!'+this.props.index)
    this.props.select(this.props.index)
  }

  render(){
    const zoneStyle = styles.zone
    const zipCode = this.props.nozone1.zipCodes[0]
    const title = (this.props.isSelected) ? <a style= {zoneStyle.title} href = "#">{this.props.nozone1.name}</a>: <a href = "#">{this.props.nozone1.name}</a>
    return(
      <div style={zoneStyle.container}>
      <h2 onClick={this.onSelctTitle.bind(this)}style={zoneStyle.header}>
       { title }
      </h2>
      <span className= "detail">{zipCode}</span>< br />
     <span className= "detail">{this.props.nozone1.numComments} comments</span>
      </div>
    )
  }
}

export default Zone
//<a style= {zoneStyle.title} href = "#">{this.props.nozone1.name}</a>
