

const reducer = (state, action) => {

    switch(action.type){
        case "SAVE_USERS":{
            return({...state, users: action.payload});
        }
        case "SELECT_USER":{
            return({...state, selectUser: action.payload});
        }
        case "SELECT_FILE":{
            return({...state, selectFile: action.payload});
        }
        case "FLAG_PHOTO":{
            return({...state, flagPhoto: action.payload});
        }
        case "FLAG_UPDATE":{
            return({...state, flagUpdate: action.payload});
        }
        case "HANDLE_INPUT_CREATE":{
            return({...state, newUser: {...state.newUser, ...action.payload}});
        }
        case "HANDLE_INPUT":{
            return({...state, selectUser: {...state.selectUser, ...action.payload}});
        }
        case "CLEAR_CREATE":{
            return({...state, newUser: {
                username: "",
                password: "",
                email: "",
                firstname: "",
                lastname: "",
                role: "",
                location: "",
                birthdate: ""}});
        }
    }


}

export default reducer;

