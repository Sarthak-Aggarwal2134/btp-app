export const SET_URI_NAME_1 = 'SET_URI_NAME_1';
export const SET_URI_NAME_2 = 'SET_URI_NAME_2';

export const setURI1 = (uri)  =>dispatch => {
   dispatch({
    type: SET_URI_NAME_1,
    payload:uri,
   });
};

export const setURI2 = (uri)  =>dispatch => {
    dispatch({
     type: SET_URI_NAME_2,
     payload:uri,
    });
    }; 