
const reducerPost = (state, action) => {

    switch(action.type){
        case "SAVE_POST":{
            return({...state, array: action.payload});
        }
    }

}

export default reducerPost;


