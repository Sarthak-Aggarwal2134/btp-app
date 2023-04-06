import { SET_URI_NAME_1,SET_URI_NAME_2 } from "./actions";

const initialState = {
    uriName1: "",
    uriName2: ""
};

function uri_reducer(state=initialState, action){
    switch(action.type){
        case SET_URI_NAME_1:
            return {
                ...state,
                uriName1: action.payload
            };
        case SET_URI_NAME_2:
            return {
                ...state,
                uriName2: action.payload
            };
        default:
            return state;
    }
}

export default uri_reducer;