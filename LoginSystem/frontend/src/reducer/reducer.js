
const reducer = (state, action) => {

    switch(action.type){
        case "SAVE_AUTH":{
            return ({...state, username: action.payload.username, password: action.payload.password })
        }
    }
    console.log(state);
}

export default reducer;

