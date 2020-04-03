const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuthorised: false,
    //isFetching: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return  {
                ...state,
                ...action.data,
                isAuthorised: true
            };
        }

        default: return state;
    }
};

// Action creators. Создает экшены для вызова функций authReducer
export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});
export default authReducer;