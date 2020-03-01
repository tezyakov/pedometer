import React, { Component } from 'react';
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


class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      columnDefs: [{
        headerName: "Дата", 
        field: "date", 
        editable: true, 
        width: 144,
      }, {
        headerName: "Дистанция", 
        field: "distance", 
        editable: true, 
        width: 189,
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
    }
  };

  componentDidMount() {
    this.setState(this.props.users)
    console.log(this.props.users)
    fetch('http://localhost:3000/walking')
    .then(result => result.json())
    .then(rowData => {
      for (let i=0; i < rowData.length; i++) {
        rowData[i].date = setRigthDate(rowData[i].date);
      }
      for (let i=0; i < rowData.length; i++) {
        rowData[i].distance = setRightDistance(rowData[i].distance); //теперь корректный вывод, но это сломало сортировку столбца (работает только по первому символу)
      }
      this.setState({rowData})
    })
  }

  render() {
    return (
      <div>
        {this.state.clicked ? <InputForm /> : ''} 
        <div
          className="ag-theme-balham"
          style={{
          height: '500px',
          width: '335px' }}
        >
        <AgGridReact
          rowHeight={40}
          enableSorting={true}
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}>
        </AgGridReact>
        </div>
          <button className={styles.gridButton} onClick={() => this.setState({clicked: true})}>Добавить запись</button>
      </div>
    );
  }
};

const mapStateToProps = state => {
  const users = state.userDataReducer;
  return users;
}

export default connect(mapStateToProps, {addUser} )(Grid)
