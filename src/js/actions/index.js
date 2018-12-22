import {ADD_ARTICLE} from "../constants/action-types";
import {DELETE_ARTICLE} from "../constants/action-types";
import {FETCH_ARTICLES} from "../constants/action-types";
import {USER_FETCH_ERROR} from "../constants/action-types";
import {FETCH_USER} from "../constants/action-types";
import {USER_FETCH_SUCCEEDED} from "../constants/action-types";


export const addArticle = news => ({type: ADD_ARTICLE, payload: news});
export const deleteArticle = news => ({type: DELETE_ARTICLE, payload: news});
export const fetchArticles = () => ({type: FETCH_ARTICLES});


export const fetchUser = user => ({type: FETCH_USER, payload: user});
export const userFetchSucceded = () => ({type: USER_FETCH_SUCCEEDED});
export const userFetchError = () => ({type: USER_FETCH_ERROR});

