import axios from 'axios';

export const ADD_USER = 'ADD_USER'
export const FETCH_USERS = 'FETCH_USERS'
export const DELETE_USER = 'DELETE_USER'
export const UPDATE_USER = 'UPDATE_USER'
export const FIND_USER = 'FIND_USER'
export const LOGIN_USER = 'LOGIN_USER'


const addUrl = 'http://localhost:8080/api/useradd'
const getUrl = 'http://localhost:8080/api/userall'
const delUrl = 'http://localhost:8080/api/userdel/'
const updateUrl = 'http://localhost:8080/api/userupd'
const findUrl = 'http://localhost:8080/api/users/'
const loginUrl = 'http://localhost:8080/api/login'


const saveUser = (payload) => {
    return {
        type: ADD_USER,
        payload
    };
}

export const addUser = (payload) => {
    return dispatch => {
        axios.post(addUrl, payload)
            .then((response) => {
                alert(response.data.text);
                console.log(response.data);
                dispatch(saveUser(response.data))
            })
            .catch(function (error) {
                console.log(error);
                dispatch(saveUser({ message: 'Unable to  add user!!' }))
            });
    }
}


const getUser = (payload) => {
    return {
        type: FETCH_USERS,
        payload
    };
}

export const fetchUsers = () => {
    return dispatch => {
        //fetch(getUrl)
        axios(getUrl)
            //.then(res => res.json())
            .then(res => dispatch(getUser(res.data)));
    }
}


const removeUser = (payload) => {
    return {
        type: DELETE_USER,
        payload
    };
}

export const deleteUser = (user_id) => {
    return dispatch => {
        // fetch(baseUrl)
        console.log('axios delete...')
        axios.delete(delUrl + user_id)
            // .then(res => res.json())
            .then(res => {
                console.log('After http response', res.data)
                dispatch(removeUser(res.data))
            });
    }
}

const updatedUser = (payload) => {
    return {
        type: UPDATE_USER,
        payload
    };
}
export const updateUser = (payload) => {

    return dispatch => {

        axios.put(updateUrl, payload)
            .then((response) => {
                console.log(response);
                dispatch(updatedUser({ message: 'Successfully updated user!!' }))
            })
            .catch(function (error) {
                console.log(error);
                dispatch(updatedUser({ message: 'Unable to  add user!!' }))
            });
    }
}

const findUser = (payload) => {
    return {
        type: FIND_USER,
        payload

    };
}
export const findUsers = (user_id) => {
    return dispatch => {
        //fetch(getUrl)
        axios(findUrl + user_id)
            //.then(res => res.json())
            .then(res => {
                console.log(res.data);
                dispatch(findUser(res.data))
            });
    }
}
const loginUser = (payload) => {
    return {
        type: LOGIN_USER,
        payload
    };
}

export const LoggedUser = (payload) => {

    return dispatch => {
        axios.post(loginUrl, payload)
            .then((response) => {
                
                console.log(response.data);
                //alert("Successfully Logged In")
                dispatch(loginUser(response.data))
                //    dispatch(loginUser({message: response.text, auth: response.data}))
            })
            .catch(function (error) {
                alert("Un Successfull Logging In")
                console.log(error);
                //dispatch(loginUser(res.data))
                // dispatch(loginUser({message: 'Unable to  log in', auth: payload}))
            });
    }
}
