import * as actionCreators from '../actions/contentaction'
// 2. create reducer

const initialState = {
    message: '',
    contents: [],
    content: {},
    comment: []
}

const reducer = function (state = initialState, action) {
    switch (action.type) {
        case actionCreators.ADD_LIKE:
            console.log('add  data from here', action.payload);
            let newMessages = action.payload.message;
            return {
                message: newMessages
            }
        case actionCreators.ADD_DISLIKE:
            console.log('add  data from here', action.payload);
            let newMessagess = action.payload.message;
            return {
                message: newMessagess
            }
        case actionCreators.ADD_COMMENT:
            console.log('add  data from here', action.payload);
            let newComments = action.payload.message;
            return {
                message: newComments,
            }
        case actionCreators.FETCH_CONTENTS:
            console.log('fetch data from here');
            let freshContents = [...action.payload]
            let users = { ...action.payload.user }
            return {
                contents: freshContents,
                message: state.message,
                user: users
            }

        case actionCreators.FIND_CONTENT:
            console.log('fetch data from here');
            let contentss = [...action.payload]
            console.log(contentss);
            return {
                contents: contentss
            }
            case actionCreators.DELETE_CONTENT:
                console.log('in reducer delete method');
                return {
                    message: action.payload.text,
                    contents: action.payload.contents
                }

        default:
            return state;
    }
}

export default reducer;