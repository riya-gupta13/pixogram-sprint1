import * as actionCreators from '../actions/action'
// 2. create reducer

const initialState = {
    message: '',
    users: [],
    auth : '',
    user : {}
}


const reducer = function (state = initialState, action) {
    switch (action.type) {
        case actionCreators.ADD_USER:
            console.log('add  data from here', action.payload);
            console.log(state.users);
            let newMessage = action.payload.message;
            let newUsers = [...state.users, action.payload.user]
            
            return {
                users: newUsers,
                message: newMessage
            }
        case actionCreators.FETCH_USERS:
            console.log('fetch data from here');
            let freshUsers = [...action.payload]
            return {
                users: freshUsers,
                message: state.message
            }
        case actionCreators.DELETE_USER:
            console.log('in reducer delete method');
           
            return {
                message: action.payload.text,
                users: action.payload.users
            }
        case actionCreators.UPDATE_USER:
            console.log('add  data from here', action.payload);
            let newMessages = action.payload.message;
            let newUserss = [...state.users,action.payload.user]
           
            return {
                users: newUserss,
                message: newMessages
            }
        case actionCreators.FIND_USER:
            console.log('fetch data from here');
            let userss = {...action.payload}
            console.log(userss);
            return {
                users: userss
            }
        case actionCreators.LOGIN_USER:
            console.log('login from here', action.payload.text);
            console.log('login from here', action.payload.auth);
            console.log('login from here', action.payload.user);
            localStorage.setItem('userRole', action.payload.user.role.rolename);
            localStorage.setItem('user_id', action.payload.user.user_id);
            localStorage.setItem('userEmail', action.payload.user.email);
            localStorage.setItem('userPassword', action.payload.user.password);
            localStorage.setItem('userUsername', action.payload.user.username);
            localStorage.setItem('userBio', action.payload.user.bio);
            localStorage.setItem('userState', action.payload.user.state);
            localStorage.setItem('userGender', action.payload.user.gender);
            console.log(localStorage.getItem('user_id'));
            console.log(localStorage.getItem('userRole'));
            console.log(localStorage.getItem('userEmail'));
            
            return {
                // users: newUsers,
                message: action.payload.text,
                auth:action.payload.auth,
                user :action.payload.user
            }
        default:
            return state;
    }


}

export default reducer;