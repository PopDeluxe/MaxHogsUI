import { simpleHttpRequest } from 'ag-grid-community';
import React, { useState, useEffect } from 'react';

import { Header, Image, Table, Card, Statistic, Label, Grid, TableBody, Icon, TableRow} from 'semantic-ui-react';



//import { AgGridColumn, AgGridReact } from 'ag-grid-react';

//import 'ag-grid-community/dist/styles/ag-grid.css';
//import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

 




const App = () => {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);


   const [rowData, setRowData] = useState([]);

   //var json = fetch('http://localhost:8080/api/v1/maxhogs/clan');


    useEffect(() => {
        //fetch('http://localhost:8080/api/v1/maxhogs/merged')
        fetch('https://maxhogs.herokuapp.com/api/v2/maxhogs/merged')
        .then(result => result.json())
        .then(rowData => setRowData(rowData))
    }, []);



    return (

        <div>
        <Grid divided='vertically'>
          <Grid.Row columns={4}>
          <Grid.Column>

          <Table basic='very' celled collapsing>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Donations</Table.HeaderCell>
        <Table.HeaderCell>Donation Score</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row positive>
        <Table.Cell textAlign='right'>
          200+ <Icon name='hand peace outline' />
        </Table.Cell>
        <Table.Cell>4</Table.Cell>
      </Table.Row>
      <Table.Row positive>
        <Table.Cell textAlign='right'>
          100 - 200 <Icon name='thumbs up outline' />
        </Table.Cell>
        <Table.Cell>3</Table.Cell>
      </Table.Row>
      <Table.Row positive>
        <Table.Cell textAlign='right'>
          50 - 100 <Icon name='hand lizard outline' />
        </Table.Cell>
        <Table.Cell>2</Table.Cell>
      </Table.Row>
      <Table.Row warning>
        <Table.Cell textAlign='right'>
          {">"}0 - 50 <Icon name='thumbs down outline' />
        </Table.Cell>
        <Table.Cell>1</Table.Cell>
      </Table.Row>
      <Table.Row negative>
        <Table.Cell textAlign='right'>
          0 <Icon name='attention' />
        </Table.Cell>
        <Table.Cell>0</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>


  
          </Grid.Column>

          <Grid.Column>
          <Table basic='very' celled collapsing>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>River Fame</Table.HeaderCell>
        <Table.HeaderCell>Fame Score</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row positive>
        <Table.Cell textAlign='right'>
          10,000+ <Icon name='hand peace outline' />
        </Table.Cell>
        <Table.Cell>4</Table.Cell>
      </Table.Row>
      <Table.Row positive>
        <Table.Cell textAlign='right'>
          5,000 - 10,00 <Icon name='thumbs up outline' />
        </Table.Cell>
        <Table.Cell>3</Table.Cell>
      </Table.Row>
      <Table.Row positive>
        <Table.Cell textAlign='right'>
          1,000 - 5,000 <Icon name='hand lizard outline' />
        </Table.Cell>
        <Table.Cell>2</Table.Cell>
      </Table.Row>
      <Table.Row warning>
        <Table.Cell textAlign='right'>
          {">"}0 - 1,000 <Icon name='thumbs down outline' />
        </Table.Cell>
        <Table.Cell>1</Table.Cell>
      </Table.Row>
      <Table.Row negative>
        <Table.Cell textAlign='right'>
          0 <Icon name='attention' />
        </Table.Cell>
        <Table.Cell>0</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
          </Grid.Column>

          <Grid.Column>

          <Table basic='very' celled collapsing>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Hog Score</Table.HeaderCell>
        
            </Table.Row>
            </Table.Header>

            <Table.Body>
      <Table.Row positive>
        <Table.Cell textAlign='right'>
          Avg(Donation Score + Fame Score)
        </Table.Cell>

      </Table.Row>
 
    </Table.Body>


          </Table>
          
          </Grid.Column>
              

          <Grid.Column>
          <Image src='https://api-assets.clashroyale.com/cards/300/ASSQJG_MoVq9e81HZzo4bynMnyLNpNJMfSLb3hqydOw.png'/>
          </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={1}>
      
      <Grid.Column>
      <Card.Group>
            {rowData.map( (row) => 

              <Card >

                <Card.Content>
                  <Card.Header>{row.name}</Card.Header>
                  <Card.Meta>{row.role}</Card.Meta>
                  <Card.Description>
                    donations:  {row.donations}<br/>
                    river fame:  {row.fame}<br/>
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
  </Grid>

            

        </div>
    );
};

export default App;