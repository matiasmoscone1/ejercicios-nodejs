

const reducerAdmin = (state, action) => {

    switch(action.type){
        case "SAVE_USERS":
            return({...state, originalArray: action.payload, array: action.payload});
        case "FILTER_USERNAME":
            console.log(state);
            console.log(action.payload.filter);
            const newList = state.originalArray.filter((user) => action.payload.filter === user.username);
            return{...state, array: newList};
        }
}

export default reducerAdmin;