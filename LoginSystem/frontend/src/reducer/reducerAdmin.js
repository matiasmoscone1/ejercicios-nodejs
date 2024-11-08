

const reducerAdmin = (state, action) => {

    switch(action.type){
        case "SAVE_USERS":
            return({...state, array: action.payload});
        }

}

export default reducerAdmin;