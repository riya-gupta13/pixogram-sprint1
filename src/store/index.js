import { combineReducers } from "redux"

import userreducer from "./reducer"
import followerreducer from "./followerreducer"

import contentreducer from "./contentreducer"

export default combineReducers({
     followerreducer,
     userreducer,
     contentreducer

})