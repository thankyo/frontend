import { event } from '../../util/promiseStates';

export const GET_EARNINGS = event("GET_EARNINGS");

let date = new Date();

export const thisMonthEarnings = GET_EARNINGS.getMy(`/api/v1/thank/stat/$id/${date.getFullYear()}/${date.getMonth() + 1}`);
