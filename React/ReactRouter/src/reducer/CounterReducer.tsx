type State = {
    count: number
}
type Action  = {type: "INCREMENT"} | {type: "DECREMENT"}
export const reducer = (state: State, action: Action) =>{
    switch(action.type){
    case 'INCREMENT':
        return {count: state.count+1}
    case "DECREMENT":
        return{count: state.count-1} 
        
    default:
        return state
    }
}