export const FIREBASE_URL = 'https://frontend-workshop.firebaseio.com/';
export const JSON_API_URL = 'https://jsonplaceholder.typicode.com/';
export const JSON_API_COMMENTS = 'comments';
export const JSON_API_TODOS = 'todos';

export const random = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (
        max - min + 1
    )) + min;
};