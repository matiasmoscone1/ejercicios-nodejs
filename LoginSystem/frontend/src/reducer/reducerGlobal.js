

const reducerGlobal = (state, action) => {
    switch(action.type){
        case "DATA_NEW_USER": 
            return({...state, dataNewUser: action.payload});
        case "SELECTED_USER": 
            return({...state, selectedUser: action.payload});
        case "FILTER_OPTIONS":
            return({...state, filterOptions: action.payload});
        case "FLAG_POPUP":
            return({...state, flagPopUp: action.payload});
        case "FLAG_POPUP_EDIT":
            return({...state, flagPopUpEdit: action.payload});
        case "CLEAR_FILTERS":
            return{...state, filterOptions: {username: "", email: "", age: ""}};
        case "FLAG_NEW_POST":
            return{...state, flagPost: action.payload};
    }
}


export default reducerGlobal;