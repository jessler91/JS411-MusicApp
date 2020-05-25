import React from 'react'
import Cards from './Cards'
import '../App.css';

class Dashboard extends React.Component {

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

export default Dashboard;
