import {
    JSON_API_URL,
    JSON_API_COMMENTS,
    FIREBASE_URL,
} from './constants.js';

// export const getComments = async () => {
//     try {
//         const response = await fetch(JSON_API_URL + JSON_API_COMMENTS);
//         return await response.json();
//     } catch (error) {
//         console.log(error);
//     }
// };

export const apiGetImages = async () => {
    try {
        const response = await fetch(FIREBASE_URL + 'images.json');
        return await response.json();
    } catch (error) {
        console.log(error);
    }
};

export const apiSetImage = async (imageId) => {
    try {
        const response = await fetch(FIREBASE_URL + 'images.json', {
            method: 'POST',
            body: JSON.stringify({
                id: imageId,
                src: `https://picsum.photos/id/${ imageId }/200/200`,
            }),
        });
        return await response.json();
    } catch (error) {
        console.log(error);
    }
};

export const apiRemoveImageById = async (imageId) => {
    try {
        const response = await fetch(`${FIREBASE_URL}images/${imageId}.json`, {
            method: 'DELETE',
        });
        return await response.json();
    } catch (error) {
        console.log(error);
    }
};

export const apiRemoveImages = async () => {
    try {
        const response = await fetch(`${FIREBASE_URL}images.json`, {
            method: 'DELETE',
        });
        return await response.json();
    } catch (error) {
        console.log(error);
    }
};

// export const openConnection = (path) => {
//     console.log('openConnection');
//     const http = new XMLHttpRequest();
//     const url = FIREBASE_URL + path;
//     http.open('GET', url);
//     http.send();
//
//     http.onreadystatechange = (event) => {
//         if (http.readyState == 4 && http.status == 200) {
//             console.log(http.responseText);
//         }
//     };
// };