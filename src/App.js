import React from 'react'
import { Tab, Grid, Icon } from 'semantic-ui-react'

import HogScoreMatrix from "./components/hogScoreMatrix";
import HogScores from "./components/hogScores";
import Welcome from "./components/welcome"



const panes = [
  { menuItem: 'What is this?', render: () => 
        <Tab.Pane><Welcome /></Tab.Pane> }
        
        
        ,
  { menuItem: 'Hog Scores', render: () => 
        <Tab.Pane>
            <Grid  divided='vertically'>
                <HogScoreMatrix/>
                <HogScores/>
            </Grid>
        </Tab.Pane>},
  
]

const MaxHogTabs = () => <Tab panes={panes} />

export default MaxHogTabs;