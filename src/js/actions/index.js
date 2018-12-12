import {ADD_ARTICLE} from "../constants/action-types";
import {DELETE_ARTICLE} from "../constants/action-types";
import {FETCH_ARTICLES} from "../constants/action-types"

export const addArticle = news => ({type: ADD_ARTICLE, payload: news});
export const deleteArticle = news => ({type: DELETE_ARTICLE, payload: news});
export const fetchArticles = () => ({type: FETCH_ARTICLES});
