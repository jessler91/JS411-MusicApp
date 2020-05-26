import React, {Component} from 'react'
import Cards from './Cards'
import '../App.css';

export class Dashboard extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            isLoading:false,
            //  notifications: []
        }
    }
    

    render() {
        return  (
            <div>            
                <p>Testing</p>
                <Cards />
            </div>
        )
      }
      
}