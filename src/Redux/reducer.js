import { ADD_ROW } from './actions/addRow';
import { ADD_ROW_ASYNC } from './actions/addRowAsync'

const initialState = {
  rowData: []
};

function rowReducer(state = initialState, action){
  switch(action.type) {
    case ADD_ROW:
      return Object.assign({}, state, 
        {
          rowData: [...state.rowData, {date: 'Введите дату', distance: 'Введите расстояние'}]
        }); 
    case ADD_ROW_ASYNC:
      return Object.assign({}, state, 
        {
          rowData: [...state.rowData, action.rowData]
        });
   default: 
     return state;
  }
}

export default rowReducer;