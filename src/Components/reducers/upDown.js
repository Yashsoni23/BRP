const intialState = 0;

const changeTheNumber = (state = intialState,action)=>{
    switch(action.type){
        case "INCREMENT": return state + 1;
        case "DECREMENT": return state - 1;
        default : return state ;
    }
}
export default changeTheNumber;