import addRowAsync from './addRowAsync';

const fetchRowAsync = (url) => {
  return (dispatch) => {
    fetch(url)  
    .then(result => result.json())
    .then(rowData => dispatch(addRowAsync(rowData))) //не работает + где-то здесь надо еще применять функции как в Grid (41-43 строки)
    }
  }

export default fetchRowAsync;