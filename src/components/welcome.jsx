import React, { useState, useEffect } from 'react';



import { Card, Statistic, Grid, Icon, Image, Header, Message} from 'semantic-ui-react';




function Welcome (props){






return (

    <div>
        <Grid>
        <Grid.Row columns={2}>

        <Grid.Column width={2}>
        <Image floated='left' src={`${process.env.PUBLIC_URL}/images/greetings.png`} size='small'/>

            </Grid.Column>


            <Grid.Column>

            <Header as='h1'>Greetings Hawgs!</Header>
    <p>PopDeluxe here.  Hope all is well out there!  I've started this site just for fun....I have an interest in web development so I figured this would be a fun side project to get into.  
        But perhaps this can also become a useful tool for us as well.</p>

    <Header as='h3'>Hog Scores.  Say what?</Header>
    <p>Our clan seems to care the most about 2 things:  Donations and River Race participation.  
        On the Hog Scores tab a "Hog Score" is calculated on a scale of 0-4 (4 good, 0 bad), which takes into account donations/river race stats.  
        The idea is to use this insight to help us better manage the clan in an easier way.</p> 
        <p><Message warning>
    
    <p><b>please note:</b>  it takes a moment to calculate the Hog Scores....so give it a few and hopefully it will render.  I will look into adding something that indicates it is working.</p>
  </Message></p>


    <Header as='h3'>Feature Requests?</Header>
    <p>Hit me up in chat or send a message to the clan.  Basically we have access to the entire CR api, so whatever you think would be helpful I'd like to hear it so I can try to add.  
        Ex:  maybe it would be good to highlight hawgs that are requesting only and never donating?  Or perhaps a leader board so we can see the top hogs.  Stuff like that.  Just let me know!</p>

            </Grid.Column>

            </Grid.Row>
      
      

        </Grid>
    

    
    </div>
);


}

export default Welcome;