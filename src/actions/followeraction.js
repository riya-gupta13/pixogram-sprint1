import axios from 'axios';

export const ADD_FOLLOWER = 'ADD_FOLLOWER'
export const FETCH_FOLLOWERS = 'FETCH_FOLLOWERS'
export const DELETE_FOLLOWER = 'DELETE_FOLLOWER'

const addUrl = 'http://localhost:8080/api/follow'
const getUrl = 'http://localhost:8080/api/userall'
const delUrl = 'http://localhost:8080/api/unfollow/'


const saveFollower = (payload) => {
    return {
        type: ADD_FOLLOWER,
        payload
    };
}

export const addFollower = (payload) => {

    return dispatch => {
        console.log(payload);
        axios.post(`http://localhost:8080/api/follow?user_id=${payload.user_id}&follower__email=${payload.follower__email}&user_email=${payload.user_email}`)
          .then((response) => {
            console.log(response);
            dispatch(saveFollower({message: 'Successfully added follower!!', followers: payload}))
          })
          .catch(function (error) {
            console.log(error);
            dispatch(saveFollower({message: 'Unable to  add follower!!'}))
          });
    }

}

const removeFollower = (payload) => {
    return {
        type: DELETE_FOLLOWER,
        payload
    };
}

export const deleteFollower = (payload) => {
    return dispatch => {
        // fetch(baseUrl)
        console.log('axios delete...')
        axios.delete(`http://localhost:8080/api/unfollow?user_id=${payload.user_id}&follower_id=${payload.follower_id}` )
            // .then(res => res.json())
            .then(res =>{
                console.log('After http response',  res.data)
                dispatch(removeFollower(res.data))
            }  );
    }
}

