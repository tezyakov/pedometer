import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import axios from 'axios';

import InputForm from '../InputForm';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import styles from './styles.module.scss';
import '../ag-grid-overrides.scss'


const Gridd = () => {
  const [clicked, setClicked] = React.useState(false);
  const [values, setValues] = React.useState({
    columnDefs: [{
      headerName: "Дата", 
      field: "date", 
      editable: true, 
      width: 158, 

    }, {
      headerName: "Дистанция", 
      field: "distance", 
      editable: true, 
      width: 175,
    }],
    rowData: [{
      date: "Toyota", 
      distance: "Celica"
    }, {
      date: "Toyota", 
      distance: "Celica"
    }, {
      date: "Toyota", 
      distance: "Celica"
    }, {
      date: "Toyota", 
      distance: "Celica"
    }, {
      date: "Toyota", 
      distance: "Celica"
    }]
  })

  const getData = async() => {
    const data = await axios.get('http://localhost:3000/walking');
    const rowData = data.data;
    setValues(rowData);
  }

  getData();

  return (
    <div className={styles.contentContainer}>
      <div
        className="ag-theme-balham"
        style={{
        height: '500px',
        width: '335px' }}
      >
        <AgGridReact
        rowHeight={40}
        enableSorting={true}
        columnDefs={values.columnDefs}
        rowData={values.rowData}>
        </AgGridReact>
      <button className={styles.gridButton} onClick={() => setClicked(true)}>Подтвердить</button>
      {clicked ? <InputForm /> : ''}
      </div>
    </div>
  );
};



export default Gridd;