import React, { createContext, useReducer } from "react";
import { Reducer } from "./Reducer";

interface Props{
    children:any,
    
}

const initialState:any={
    options:[
          { id: 1, text: 'Flower', amount: -20 },
          { id: 2, text: 'Salary', amount: 300 },
          { id: 3, text: 'Book', amount: -10 },
          { id: 4, text: 'Camera', amount: 150 }
        ]
}


export const GlobalContext = createContext(initialState);



export const GlobalProvider:React.FC<Props>=({children})=>{
    const [state,dispatch]= useReducer(Reducer,initialState)


    function deleteHandle(id: any){
        dispatch({
            type:"DELETE_VALUE",
            payload: id
        })
    } 

    function editHandle(option:any){
        dispatch({
            type:"EDIT_VALUE",
            payload: option
        })
    } 

    return (<GlobalContext.Provider value={{options: state.options, deleteHandle,editHandle}}>
        {children} 
    </GlobalContext.Provider>)
}
