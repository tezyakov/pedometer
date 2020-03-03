import React from 'react';
import PropTypes from 'prop-types';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import '../../ag-grid-overrides.scss'

const Grid = ({ columnDefs, rowData }) => (
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
      rowData={rowData}>
    </AgGridReact>
    </div>
  </div>
)

Grid.propTypes = {
  columnDefs: PropTypes.arrayOf(PropTypes.shape({
    headerName: PropTypes.string.isRequired,
    field: PropTypes.string.isRequired,
    editable: PropTypes.bool.isRequired, 
    width: PropTypes.number.isRequired,
    resizable: PropTypes.bool.isRequired
  })),
  rowData: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string,
    distance: PropTypes.string
  }))
}

export default Grid;
 