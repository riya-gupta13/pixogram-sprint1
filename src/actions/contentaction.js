import axios from 'axios';

export const ADD_CONTENT = 'ADD_CONTENT'
export const FETCH_CONTENTS = 'FETCH_CONTENTS'
export const DELETE_CONTENT = 'DELETE_CONTENT'
export const FIND_CONTENT = 'FIND_CONTENT'
export const ADD_LIKE = 'ADD_LIKE'
export const ADD_DISLIKE = 'ADD_DISLIKE'
export const ADD_COMMENT = 'ADD_COMMENT'



const addUrl = 'http://localhost:8080/api/upload'
const getUrl = 'http://localhost:8080/api/uploadsall'
const delUrl = 'http://localhost:8080/api/uploaddel/'



// const saveContent = (payload) => {
//     return {
//         type: ADD_CONTENT,
//         payload
//     };
// }

// export const addContent = (payload) => {
//     console.log(payload);
//     return dispatch => {
//         // axios.post(`http://localhost:8080/api/upload?file=${payload.formData}&caption=${payload.caption}&user_id=${payload.user_id}`)
//         // axios.post(`http://localhost:8080/api/upload?${payload.formData}`)
//        axios.post(addUrl, payload)
//             .then((response) => {
//                 //alert(response.data.text);
//                 console.log(response.data);
//                 dispatch(saveContent(response.data))
//             })
//             .catch(function (error) {
//                 console.log(error);
//                // dispatch(saveContent({ message: 'Unable to  add user!!' }))
//             });
//     }
// }

const saveLike = (payload) => {
    return {
        type: ADD_LIKE,
        payload
    };
}

export const addLike = (content_id) => {
    console.log(content_id)
    // console.log(payload);
    return dispatch => {
        // axios.post(`http://localhost:8080/api/upload?file=${payload.formData}&caption=${payload.caption}&user_id=${payload.user_id}`)
        axios.post(`http://localhost:8080/api/like?content_id=${content_id}&user_id=${localStorage.getItem('user_id')}`)
        //axios.post(addLikeUrl, content_id, localStorage.getItem('user_id'))
            .then((response) => {
                //alert(response.data.text);
                console.log(response.data);
                dispatch(saveLike(response.data))
                dispatch(fetchContents())
            }).then(data=>dispatch(fetchContents()));
            // .catch(function (error) {
            //     console.log(error);
            //    // dispatch(saveContent({ message: 'Unable to  add user!!' }))
            // });
    }
}
const saveDislike = (payload) => {
    return {
        type: ADD_DISLIKE,
        payload
    };
}

export const addDislike = (content_id) => {
    console.log(content_id)
    // console.log(payload);
    return dispatch => {
        // axios.post(`http://localhost:8080/api/upload?file=${payload.formData}&caption=${payload.caption}&user_id=${payload.user_id}`)
        axios.post(`http://localhost:8080/api/dislike?content_id=${content_id}&user_id=${localStorage.getItem('user_id')}`)
        //axios.post(addLikeUrl, content_id, localStorage.getItem('user_id'))
            .then((response) => {
                //alert(response.data.text);
                console.log(response.data);
                dispatch(saveDislike(response.data))
            }).then(data=>dispatch(fetchContents()));
            // .catch(function (error) {
            //     console.log(error);
            //    // dispatch(saveContent({ message: 'Unable to  add user!!' }))
            // });
    }
}

const saveComment = (payload) => {
    return {
        type: ADD_COMMENT,
        payload
    };
}

export const addComment = (content_id,comment) => {
    console.log(content_id)
    console.log(comment);
    return dispatch => {
        // axios.post(`http://localhost:8080/api/upload?file=${payload.formData}&caption=${payload.caption}&user_id=${payload.user_id}`)
        axios.post(`http://localhost:8080/api/comment?content_id=${content_id}&user_id=${localStorage.getItem('user_id')}&comment=${comment}`)
        //axios.post(addLikeUrl, content_id, localStorage.getItem('user_id'))
            .then((response) => {
                //alert(response.data.text);
                console.log(response.data);
                dispatch(saveComment(response.data))
            }).then(data=>dispatch(fetchContents()));
            // .catch(function (error) {
            //     console.log(error);
            //    // dispatch(saveContent({ message: 'Unable to  add user!!' }))
            // });
    }
}


const getContent = (payload) => {
    return {
        type: FETCH_CONTENTS,
        payload
    };
}

export const fetchContents = () => {
    return dispatch => {
        //fetch(getUrl)
        axios(getUrl)
            //.then(res => res.json())
            .then(res => dispatch(getContent(res.data)));
    }
}


const removeContent = (payload) => {
    return {
        type: DELETE_CONTENT,
        payload
    };
}

export const deleteContent = (content_id) => {
    return dispatch => {
        // fetch(baseUrl)
        console.log('axios delete...')
        axios.delete(delUrl + content_id)
            // .then(res => res.json())
            .then(res => {
                console.log('After http response', res.data)
                dispatch(removeContent(res.data))
            });
    }
}


const findContent = (payload) => {
    return {
        type: FIND_CONTENT,
        payload

    };
}
export const findContents = (user_id) => {
    return dispatch => {
        //fetch(getUrl)
        // axios(findUrl + user_id)
        axios(`http://localhost:8080/api/trackcontents?user_id=${user_id}`)
            //.then(res => res.json())
            .then(res => {
                console.log(res.data);
                dispatch(findContent(res.data))
            });
    }
}
