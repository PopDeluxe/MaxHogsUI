import React, { useState, useEffect } from 'react';

import { Table, TableBody, TableRow, Image, Grid, Icon, TableHeader} from 'semantic-ui-react';


function hogScoreMatrix (props){



return (


    <Grid.Row  columns={2} >
    <Grid.Column>

    <Table basic='very' celled collapsing>
        
<Table.Header>
<Table.Row>
  <Table.HeaderCell>River Attacks</Table.HeaderCell>
  <Table.HeaderCell>Hog Score</Table.HeaderCell>
</Table.Row>
</Table.Header>

<Table.Body>
<Table.Row positive>
  <Table.Cell textAlign='right'>
    12+ <Icon name='thumbs up outline' />
  </Table.Cell>
  <Table.Cell>4</Table.Cell>
</Table.Row>
<Table.Row positive>
  <Table.Cell textAlign='right'>
    8-12 <Icon name='hand peace outline' />
  </Table.Cell>
  <Table.Cell>3</Table.Cell>
</Table.Row>
<Table.Row positive>
  <Table.Cell textAlign='right'>
    4-8 <Icon name='hand lizard outline' />
  </Table.Cell>
  <Table.Cell>2</Table.Cell>
</Table.Row>
<Table.Row warning>
  <Table.Cell textAlign='right'>
    {"<"}4 <Icon name='thumbs down outline' />
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
    {/*
    <Image src='https://api-assets.clashroyale.com/cards/300/ASSQJG_MoVq9e81HZzo4bynMnyLNpNJMfSLb3hqydOw.png'/>
    */}
        <Image src={`${process.env.PUBLIC_URL}/images/puzzled.png`} size='small'/>

    </Grid.Column>
</Grid.Row>
);


}

export default hogScoreMatrix;