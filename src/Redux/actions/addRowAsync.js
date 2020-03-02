export const ADD_ROW_ASYNC = 'ADD_ROW_ASYNC'

const addRowAsync = (rowData) => { 
  return {
    type: ADD_ROW_ASYNC,
    rowData
  }
};

export default addRowAsync;