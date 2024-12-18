

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
        case "FLAG_BTN_NEW_POST":
            return{...state, flagBtnNewPost: action.payload};    
        case "SAVE_TITLE":
            return{...state, title: action.payload};    
        case "SAVE_CONTENT":
            return{...state, content: action.payload};    
        case "FLAG_EDIT_POST":
            return{...state, flagEdit: {flag: action.payload.flag, obj: action.payload.obj}}; 
        case "EDIT_POST_TITLE":
            return{...state, flagEdit: {...state.flagEdit, obj: {...state.flagEdit.obj, title: action.payload}}};   
        case "EDIT_POST_CONTENT":
            return{...state, flagEdit: {...state.flagEdit, obj: {...state.flagEdit.obj, content: action.payload}}}; 
        case "COUNT_POST":
            return{...state, countPost: action.payload};    
        
    }
}


export default reducerGlobal;