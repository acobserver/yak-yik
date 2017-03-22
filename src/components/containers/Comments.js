import React, { Component } from 'react'
import {CreateComment, Comment} from '../presentation'
import styles from './styles'
import superagent from 'superagent'
import {APIManager} from '../../utils'

class Comments extends Component {
      constructor(){
        super()
        this.state = {
          // comment:{
          //   username:'',
          //   body:''
          // },
          list: [


          ]
        }
      }
      componentDidMount(){
        console.log('componentDidMount')
        APIManager.get('/api/comment', null, (err, response) => {
          if(err){
            alert('ERROR: '+err.message)
            return
          }
          this.setState({
             list: response.results

          })


        })


      }
      submitComment(comment){
         console.log('comment Submitted: '+JSON.stringify(comment))
         let updatedComment = Object.assign({}, comment)

       APIManager.post('/api/comment', updatedComment, (err, response) => {
         if(err){
           alert('ERROR'+err.message)
           return
         }
         console.log('Comment Created:'+JSON.stringify(response))
         let updatedList = Object.assign([], this.state.list)
         updatedList.push(response.result)
         this.setState({
           list:updatedList
         })

       })


      }

      // updateUsername(event){
      //   //  console.log('updateUsername: '+event.target.value)
      //     let updatedComment = Object.assign({}, this.state.comment)
      //         updatedComment['username'] = event.target.value
      //         this.setState({
      //           comment:updatedComment
      //         })
      // }
      // updateBody(event){
      //     //console.log('updateBody: '+event.target.value)
      //
      //     let updatedComment = Object.assign({}, this.state.comment)
      //         updatedComment['body'] = event.target.value
      //         this.setState({
      //           comment:updatedComment
      //         })
      // }

     render(){

      const commentItems = this.state.list.map((comment, i) => {
        return (
           <li key={i}><Comment seComment = {comment} /></li>
        )

      })
      return(
         <div>
             <div style={styles.comment.commentsBox}>
            <ul style={styles.comment.commentsUl}>
            {commentItems}
          </ul>


              <CreateComment onCreate={this.submitComment.bind(this)} />
            </div>
      </div>
    )
  }
}
export default Comments
