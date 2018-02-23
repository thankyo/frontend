import { event } from './util/promiseStates';

export const GET_USER = event("GET_USER");
export const SAVE_USER = event("SAVE_USER");

export const fetchUser = GET_USER.getById("/api/v1/user/$id/profile");
export const saveUser = SAVE_USER.putMy("/api/v1/user/$id/profile");