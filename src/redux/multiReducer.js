import { combineReducers } from "redux";
import { ticketReducer } from "./reducer";
import { profileReducer } from "./profile/reducer";


 export const rootReducer=combineReducers({
    movies: ticketReducer,
    profile: profileReducer
})