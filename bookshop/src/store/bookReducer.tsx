 import { iBookList,iBookAction } from "./types";

 export const ADD_ITEMS = "ADD_ITEMS"; 
 
const defaultState: iBookList = { 
    items: [], 
} 
   
export const bookReducer = (state = defaultState,  
  action:iBookAction): iBookList => { 
    switch (action.type){ 
        case ADD_ITEMS: 
            return{...state, items: action.items} 
      default: 
        return state; 
    } 
  }