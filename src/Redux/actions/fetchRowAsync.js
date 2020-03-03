import addRowAsync from './addRowAsync';

const fetchRowAsync = (url) => {
  return (dispatch) => {
    fetch(url)  
    .then(result => result.json())
    .then(rowData => dispatch(addRowAsync(rowData)))
    }
  }

export default fetchRowAsync;