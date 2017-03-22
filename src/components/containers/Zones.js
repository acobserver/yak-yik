import React, { Component } from 'react'
import {Zone,CreateZone} from '../presentation'
import superagent from 'superagent'
import {APIManager} from '../../utils'


class Zones extends Component {
      constructor(props){
        super(props)
        this.state = {
          selected:0,
          // zone:{
          //   name: '',
          //   zipCode:''
          // },
          list: [
          ]
        }
      }
      componentDidMount(){
        console.log('componentDidMount')
          APIManager.get('/api/zone', null, (err, response) => {
            if(err){
              alert('ERROR: '+err.message)
              return
            }
            this.setState({
               list: response.results

            })


          })
        }


      //
      // updateZone(event){
      //   console.log('updateZone:'+event.target.id+'=='+event.target.value)
      //   let   updatedZone = Object.assign({}, this.state.zone)
      //      updatedZone[event.target.id] = event.target.value
      //      this.setState({
      //        zone:updatedZone
      //      })
      // }
      addZone(zone){
      //  console.log('Zone Added: '+JSON.stringify(this.state.zone))

          let updatedZone = Object.assign({}, zone)
          //  updatedZone['zipCodes'] = updatedZone.zipCode.split(',')
            APIManager.post('/api/zone', updatedZone, (err, response) => {
              if(err){
                 alert('ERROR:'+err.message)
                  return
              }
              console.log('ZONE Created:'+JSON.stringify(response))
               let updatedList = Object.assign([], this.state.list)
               updatedList.push(response.result)
               this.setState({
                 list: updatedList
               })
  })
     }
     selectZone(index){
       console.log('selectZone'+index)
       this.setState({
         selected:index
       })
     }
     render(){
      const listItems = this.state.list.map((zone1, p) => {
        let selected = (p === this.state.selected)
        return (
           <li key={p}><Zone index={p} select={this.selectZone.bind(this)} isSelected={selected} nozone1 = {zone1} /></li>
        )

      })
      return(
         <div>
            <ol>
            {listItems}
          </ol>


          <CreateZone  onCreate={this.addZone.bind(this)}/>
      </div>
    )
  }
}
export default Zones
