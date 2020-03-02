import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import { connect } from 'react-redux';

import addRow from '../Redux/action'
import setRightDate from '../Utils/setRightDate';
import setRightDistance from '../Utils/setRightDistance'

import styles from './styles.module.scss';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import '../ag-grid-overrides.scss'




const Grid = (props) => {
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

  React.useEffect(() => {
    console.log(props)
   /* fetch('http://localhost:3000/walking')
    .then(result => result.json())
    .then(rowData => {
      const newData = rowData.map(item => ({ 
        date: setRightDate(item.date), 
        distance: setRightDistance(item.distance)
      }))

    })*/
  },[])
 
  return (
    <div>
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
        rowData={props.rowData}>
      </AgGridReact>
      </div>
      <button className={styles.gridButton} onClick={() => props.addRow({rowData: {date: '1', distance: '1'}})}>Добавить запись</button>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    rowData: state.rowData
  }
}


export default connect(mapStateToProps, {addRow})(Grid);

