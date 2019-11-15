'use strict';

import { apiGetImages } from './api.js';
import CommentComponent from './components/comment-component.js';
import GalleryComponent from './components/gallery-component.js';
import ImageComponent from './components/image-component.js';

let comments;
const body = document.getElementsByTagName('body')[0];
// getComments()
//     .then(response => {
//         console.log(response);
//         comments = response;
//
//         comments.forEach(comment => {
//             let component = new Comment(comment.name);
//             component.init(body);
//         })
//     });

let galleryComponent = new GalleryComponent({
    target: body,
    content: null,
});

