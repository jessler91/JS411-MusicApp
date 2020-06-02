import React from 'react';
import '../App.css';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Switch from '@material-ui/core/Switch';
import Slider from '@material-ui/core/Slider';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';


function Dashboard(props) {
    return (
      <div className="container">
        <h2>Welcome to your Music App Dasboard Justin!</h2>
        <div className="allCards">
          

          {/* This is Card #1
          a Switch for connection status */}
          <Card classname="card" variant="outlined">
              <CardContent>
                  <h4>Online Mode</h4>
                  <p>Is this Application Connected to the Internet?</p>
                  <Switch>
                    onChange={props.switchStatus}
                    online={props.online}
                    name="onlineMode"
                    inputProps={{ 'aria-label': 'default checkbox' }}
                  </Switch>

              </CardContent>
          </Card>
          
          
            {/* This is Card #2
          a Slider for connection status */}
          <Card classname="card" variant="outlined">
              <CardContent>
                  <h4>Master Volume</h4>
                  <p>Overrides all other sound settings in this application</p>
                  
                  <Slider>
                    value={props.currentVolume}
                    onChange={props.changeVolume}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={10}
                    min={0}
                    max={100}
                  </Slider>


                  {/* <Slider 
                    value={props.currentVolume} 
                    onChange={props.changeVolume} 
                    aria-labelledby="continuous-slider" 
                  /> */}

                  
              </CardContent>
          </Card>
          
          
          
          <Card classname="card" variant="outlined">

              <CardContent>
                  <h4>Sound Quality</h4>
                  <p>Manually control the music quality in event of poor connection</p>
                  <FormControl>
                      <InputLabel id="demo-simple-select-label">Quality</InputLabel>
                      <Select style={{width: 100}}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={props.qualityChange}
                        value={props.quality}
                        >
                        <MenuItem value='Low'>Low</MenuItem>
                        <MenuItem value='Normal'>Normal</MenuItem>
                        <MenuItem value='High'>High</MenuItem>
                      </Select>
                  </FormControl>
              </CardContent>
          </Card>

        
        {/* Rendering the system notifications at the bottom of the dashboard.
        I am having trouble gettting the state to update for the two second cards.
        So I am just going to pass for now. */}
        </div>
          <h3>System Notifications:</h3>
          <p>Sorry, I am unable to get this one completed.</p>
          <p>I promise myself to come back and finish at a later date.</p>
      </div>


    );
}

export default Dashboard;
