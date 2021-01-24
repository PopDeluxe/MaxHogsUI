import { simpleHttpRequest } from 'ag-grid-community';
import React, { useState, useEffect } from 'react';

import { Header, Image, Table, Card, Statistic} from 'semantic-ui-react';



//import { AgGridColumn, AgGridReact } from 'ag-grid-react';

//import 'ag-grid-community/dist/styles/ag-grid.css';
//import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

 




const App = () => {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);


   const [rowData, setRowData] = useState([]);

   //var json = fetch('http://localhost:8080/api/v1/maxhogs/clan');


    useEffect(() => {
        //fetch('http://10.0.0.112:8080/api/v1/maxhogs/merged')
        fetch('https://maxhogs.herokuapp.com/api/v2/maxhogs/merged')
        .then(result => result.json())
        .then(rowData => setRowData(rowData))
    }, []);



    return (

        <div>
        

            


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

            {/*
            <AgGridReact 
                rowData={rowData}>
                
                <AgGridColumn field="name" headerName="Name"></AgGridColumn>
                <AgGridColumn field="role" headerName="Role" width="100" sortable></AgGridColumn>
                <AgGridColumn field="expLevel" headerName="Exp Level" width="100" sortable></AgGridColumn>
                
                <AgGridColumn field="donations" headerName="donations" width="125" sortable></AgGridColumn>
                <AgGridColumn field="donationsReceived" headerName="donationsReceived" sortable></AgGridColumn>
                <AgGridColumn field="fame" headerName="River Fame" sortable></AgGridColumn>
                <AgGridColumn field="repairs" headerName="Boat Repairs" sortable></AgGridColumn>
                <AgGridColumn field="boatAttacks" headerName="Boat Attacks" sortable></AgGridColumn>

            </AgGridReact>

            */}

            
        </div>
    );
};

export default App;