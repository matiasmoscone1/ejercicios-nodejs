

const reducer = (state, action) => {

    switch(action.type){
        case "SAVE_USERS":{
            return({...state, users: action.payload});
        }
    }


}

export default reducer;

