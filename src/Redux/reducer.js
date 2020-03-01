import { ADD_USER } from "./action";

const initialState = { };

function userDataReducer(state={}, action){
    switch(action.type) {
        case ADD_USER:
          return Object.assign({}, state, 
              {
                users: [...state.users, action.user]
               }); 
         default: 
           return state;
     }
}

export default userDataReducer;