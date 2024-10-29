
const reducer = (state, action) => {

    switch(action.type){
        case "SAVE_AUTH":{
            return ({...state, username: action.payload.username, password: action.payload.password });
        }
    }

}

export default reducer;

