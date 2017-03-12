import { GET_USER } from './user.actions';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

const initialState = {
    thumbnail: "https://inst.eecs.berkeley.edu/~cs194-26/fa15/upload/files/proj5/cs194-bl/images/sony.jpg"
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_USER:

        default:
            return state
    }
}