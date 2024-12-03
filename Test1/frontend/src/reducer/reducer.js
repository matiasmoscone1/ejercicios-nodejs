

const reducer = (state, action) => {

    switch(action.type){
        case "SAVE_USERS":{
            return({...state, users: action.payload});
        }
        case "SELECT_USER":{
            return({...state, selectUser: action.payload});
        }
        case "FLAG_PHOTO":{
            return({...state, flagPhoto: action.payload});
        }
        case "FLAG_UPDATE":{
            return({...state, flagUpdate: action.payload});
        }
    }


}

export default reducer;

