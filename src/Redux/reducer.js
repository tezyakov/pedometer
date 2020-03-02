import { ADD_ROW } from "./action";

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
        /*return {
          ...state.rowData,
          rowData: [{ date: '1', distance: '1' } ]
        }*/
   default: 
     return state;
  }
}

export default rowReducer;