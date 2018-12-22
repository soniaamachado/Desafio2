import {ENDPOINT, USER_ENDPOINT} from '../constants/services'

export function fetchAll() {
    return fetch(ENDPOINT, USER_ENDPOINT).then(response => response.json(), );
}
