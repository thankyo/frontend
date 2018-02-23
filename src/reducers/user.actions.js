import { event } from './util/promiseStates';

export const GET_USER = event("GET_USER");
export const UPDATE_USER = event("UPDATE_USER");

export const getUser = GET_USER.getById("/api/v1/user/$id/profile");
export const updateUser = UPDATE_USER.putMy("/api/v1/user/$id/profile");