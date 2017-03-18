import React, { Component } from 'react'
import styles from './styles'

class Comment extends Component {

  render(){
    const zoneStyle = styles.zone
    return(
      <div style={{marginBottom:16,border:'1px solid #ddd'}}>
         <p style={{fontSize:20,fontweight:400}}>
        {this.props.seComment.body}
         </p>
        <span style={{fontweight:200}}>{this.props.seComment.username}</span>
        <span style={{marginLeft:12, marginRight:12, fontweight:200}}>|</span>
        <span style={{fontweight:200}}>{this.props.seComment.timestamp}</span>
        <hr />
      </div>
    )
  }
}

export default Comment
