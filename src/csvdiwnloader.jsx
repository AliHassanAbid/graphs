    //importing the necessary modules
    import React, { useState } from 'react';
    import { CSVLink } from 'react-csv';

    //Defining the data
    const data = [
        {
            name: 'John Doe',
            age: 24,
            city: 'New York'
        },
    {
        name: 'Jane Doe',
        age: 30,
        city: 'San Francisco'
    }
    ];

    //Creating the component
    const GenerateCSV = () => {
    //Declaring the state
    const [csvData, setCsvData] = useState(data);

    //Creating the CSVLink
    let csvLink = (
        <CSVLink
        data={csvData}
        filename={'my-file.csv'}
        className="btn btn-primary"
        target="_blank"
        >
        Download CSV
        </CSVLink>
    );

    return (
        <div>
        <h3>Generate CSV File in React</h3>
        {csvLink}
        </div>
    );
    };

    export default GenerateCSV;