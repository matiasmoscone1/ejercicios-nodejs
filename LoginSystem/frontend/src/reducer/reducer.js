
const reducer = (state, action) => {

    switch(action.type){
        case "SAVE_AUTH":{
            return ({...state, username: action.payload.username, password: action.payload.password});
        }
        case "CHANGE_LOG":{
            return({...state, isLogged: !state.isLogged});
        }
        case "CLEAN_DATA":{
            return({...state, username: "", password: ""});
        }
        case "ADD_DATA":{
            return({...state, id: action.payload.userId, email: action.payload.email, rol: action.payload.rol, age: action.payload.age});
        }
        case "UPDATE_DATA":{
            return({...state, username: action.payload.username, password: action.payload.password, email: action.payload.email, age: action.payload.age});
        }
    }

}

export default reducer;

