import { LOAD_ALL, LOAD_ONE_API } from './actionTypes';
import { apiList, oneApi } from '../api';

export const onLoadApis = () => ({
    type: LOAD_ALL,
    payload: apiList()
});

export const onLoadOneApi = (data) => ({
    type: LOAD_ONE_API,
    payload: oneApi(data)
});
