
const reducer = (state, action) => {

    switch(action.type){
        case "SAVE_AUTH":{
            return ({...state, username: action.payload.username, password: action.payload.password });
        }
        case "CHANGE_LOG":{
            return({...state, isLogged: !state.isLogged });
        }
    }

}

export default reducer;

