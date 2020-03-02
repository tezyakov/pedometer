import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import { connect } from 'react-redux';
import addUser from '../Redux/action'

import InputForm from '../InputForm';
import setRigthDate from '../Utils/setRightDate'
import setRightDistance from '../Utils/setRightDistance'

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import styles from './styles.module.scss';
import '../ag-grid-overrides.scss'


const Grid = () => {
  const [clicked, setClicked] = React.useState(false)
  const [columnDefs, setColumnDefs] = React.useState(
    [{
      headerName: "Дата", 
      field: "date", 
      editable: true, 
      width: 144,
      resizable: false
    }, {
      headerName: "Дистанция", 
      field: "distance", 
      editable: true, 
      width: 189,
      resizable: false
    }]
  )

  const [rowData, setRowData] = React.useState(
    [{
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
  );

  React.useEffect(() => {
    fetch('http://localhost:3000/walking')
    .then(result => result.json())
    .then(rowData => {
      for (let i=0; i < rowData.length; i++) {
        rowData[i].date = setRigthDate(rowData[i].date);
      }
      for (let i=0; i < rowData.length; i++) {
        rowData[i].distance = setRightDistance(rowData[i].distance); //теперь вывод в корректном формате, но это сломало сортировку столбца (работает только по первому символу)
      }
      setRowData(rowData)
      console.log(rowData)
    })  
  },[])
 
  return (
    <div>
      {clicked ? <InputForm /> : ''} 
      <div
        className="ag-theme-balham"
        style={{
        height: '500px',
        width: '335px' }}
      >
      <AgGridReact
        rowHeight={40}
        enableSorting={true}
        suppressHorizontalScroll={true}
        columnDefs={columnDefs}
        rowData={rowData}>
      </AgGridReact>
      </div>
      {<button className={styles.gridButton} onClick={() => setRowData(rowData.concat({date: 'Введите дату', distance: 'Введите дистанцию'}))}>Добавить запись</button>}
    </div>
  );
}

export default Grid;
