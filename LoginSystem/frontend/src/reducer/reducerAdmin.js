

const reducerAdmin = (state, action) => {

    switch(action.type){
        case "SAVE_USERS":
            return({...state, originalArray: action.payload, array: action.payload});
        case "SORT_USERS":
            return({...state, array: action.payload});
        case "FILTER_USERNAME":
            const newList = state.originalArray.filter((user) => action.payload.filter === user.username);
            return{...state, array: newList};
        case "FILTER_ROLE":
            const newListRol = state.originalArray.filter((user) => action.payload.filter === user.rol);
            return{...state, array: newListRol};
        case "FILTER_AGE":
            const newListAge = state.originalArray.filter((user) => action.payload.filter === user.age);
            return{...state, array: newListAge};
        case "CLEAR_FILTERS": 
        return({...state, array: state.originalArray});
    }
}

export default reducerAdmin;