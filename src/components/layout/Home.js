import React, { Component } from 'react'
import Zones from '../containers/Zones'
import Comments from '../containers/Comments'



class Home extends Component {
      render(){
        return (
          <div className="container">
          <div className="row">
              <div className="col-md-4">
              <Zones />
              </div>

              <div className="col-md-8">
              <h2>
              Comments: Zone 1
              </h2>
               <Comments />
              </div>
          </div>
           </div>
        )
      }
}
export default Home
