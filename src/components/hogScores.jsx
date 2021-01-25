import React, { useState, useEffect } from 'react';



import { Card, Statistic, Grid, Icon} from 'semantic-ui-react';




function HogScores (props){

    const [rowData, setRowData] = useState([]);

    useEffect(() => {
        //fetch('http://localhost:8080/api/v1/maxhogs/merged')
        fetch('https://maxhogs.herokuapp.com/api/v2/maxhogs/merged')
        .then(result => result.json())
        .then(rowData => setRowData(rowData))
    }, []);




return (


    <Grid.Row columns={1}>
      
    <Grid.Column>
    <Card.Group centered>
          {rowData.map( (row) => 

            <Card >

              <Card.Content>
                <Card.Header>{row.name}</Card.Header>
                <Card.Meta>{row.role}</Card.Meta>
                <Card.Description>
                  donations:  {row.donations} {row.donations===0 ? <Icon name='attention' color='red'/> : ''}<br/>
                  river fame:  {row.fame} {row.fame===0 ? <Icon name='attention' color='red'/> : ''}<br/>
                  boat repairs:  {row.repairs}<br/>
                  donations received:  {row.donationsReceived}<br/>
                  donation score:  {row.donationScore}<br/>
                  fame score:  {row.riverScore}<br/>
                  unrounded hog score: {row.unroundedHogScore}<br/>
                  <Statistic.Group>
                    <Statistic>
                    <Statistic.Label>Hog Score</Statistic.Label><Statistic.Value>{row.hogScore}</Statistic.Value>
                    </Statistic>
                    </Statistic.Group>
                </Card.Description>
              </Card.Content>
            </Card>
            )}
          </Card.Group>
    </Grid.Column>
  </Grid.Row>
);


}

export default HogScores;