import React from 'react';

import Header from '../../components/Header';
import Grid from '../../components/Grid'
import Button from '../../components/Button';
import setRightDistance from '../../Utils/setRightDistance';
import setRightDate from '../../Utils/setRightDate';

import styles from './styles.module.scss';

const Home = () => {
  const [rowData, setRowData] = React.useState([]);
  const [columnDefs] = React.useState(
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
  );

  React.useEffect(() => {
    fetch('http://localhost:3000/walking')
    .then(result => result.json())
    .then(rowData => {
      const newData = rowData.map(item => ({ 
        date: setRightDate(item.date), 
        distance: setRightDistance(item.distance)
      }))
      setRowData(newData)
    })  
  },[])


  return (
    <div className={styles.container}>
      <Header
        title="Шагомер на тестовое задание"
       />
      <div className={styles.contentContainer}>
        <Grid
          columnDefs={columnDefs}
          rowData={rowData}
         />
         <Button 
            onClick={() => setRowData(rowData.concat({date: 'Введите дату', distance: 'Введите дистанцию'}))} 
            title='Добавить запись'
         />
      </div>
    </div>
  );
}

export default Home;