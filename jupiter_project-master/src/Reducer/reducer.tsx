import { Action } from "../Action/actions"

const initialState={};
export const reducer=(state=initialState,action:Action)=>{
    switch (action.type){
        case "TOTAL_DATA":
        return{...state, jupiterData: action.payload}
    }
}

