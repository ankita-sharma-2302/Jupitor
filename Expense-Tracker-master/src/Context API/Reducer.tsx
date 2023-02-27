export const Reducer=(state:any,action:any)=>{
    switch(action.type){
        case "DELETE_VALUE":
            return{
                ...state,options: state.options.filter((option: { id: any; })=> option.id !== action.payload)
            }
        case "EDIT_VALUE":
            return{
                ...state,options:[action.payload,...state.options]
            }
        default: 
        return state;
    }
}
