import {
    apiGetImages,
    apiRemoveImageById,
    apiRemoveImages,
    apiSetImage,
} from '../api.js';
import { random } from '../constants.js';
import ButtonComponent from './button-component.js';
import Component from './component.js';
import GalleryCellComponent from './gallery-cell-component.js';
import ImageComponent from './image-component.js';

export default class GalleryComponent extends Component {
    constructor(data) {
        super(data);

        this.images = {};
        this.initTemplate();
        this.getImages();
    }

    initTemplate = () => {
        this.template = document.createElement('div');
        this.galleryPanel = document.createElement('div');
        this.galleryContainer = document.createElement('div');
        this.generateButton = new ButtonComponent({
            target: this.galleryPanel,
            id: 'generateButton',
            content: 'Generate images',
            onClickHandler: this.generateImages,
        });
        this.clearButton = new ButtonComponent({
            target: this.galleryPanel,
            id: 'clearButton',
            content: 'Clear gallery',
            onClickHandler: this.removeImages,
        });

        this.template.setAttribute('class', 'gallery');
        this.galleryPanel.setAttribute('class', 'gallery__panel');
        this.galleryContainer.setAttribute('class', 'gallery__container');
        this.galleryPanel.appendChild(this.generateButton.template);
        this.galleryPanel.appendChild(this.clearButton.template);
        this.template.appendChild(this.galleryPanel);
        this.template.appendChild(this.galleryContainer);
        this.target.appendChild(this.template);
    };

    getImages = () => {
        apiGetImages()
            .then(response => {
                if (response) {
                    for (let [id, image] of Object.entries(response)) {
                        if (!this.images[id]) {
                            this.images[id] = new ImageComponent({
                                target: this.template,
                                id: id,
                                content: image,
                            });
                        }
                    }

                    this.fillGallery();
                }
            });
    };

    fillGallery = () => {
        Object.values(this.images)
            .forEach(imageComponent => {
                if (!document.getElementById(imageComponent.id)) {
                    new GalleryCellComponent({
                        target: this.galleryContainer,
                        content: imageComponent,
                        onRemove: this.removeImageById,
                    });
                }
            });
    };

    generateImages = () => {
        for (let i = 0; i < 5; i++) {
            apiSetImage(random(1, 1000))
                .then(response => {
                    console.log('setImage');
                    console.log(response);
                });
        }
        this.getImages();
    };

    removeImageById = (imageId) => {
        const confirmation = confirm('Do you want to remove this image?');
        if (confirmation) {
            apiRemoveImageById(imageId)
                .then(() => {
                    delete this.images[imageId];
                    this.galleryContainer.removeChild(document.getElementById(imageId));
                });
        }
    };

    removeImages = () => {
        const confirmation = confirm('Do you want to remove all images?');
        if (confirmation) {
            apiRemoveImages()
                .then(() => {
                    while (this.galleryContainer.firstChild) {
                        this.galleryContainer.removeChild(this.galleryContainer.firstChild);
                    }
                    this.images = {};
                });
        }
    };

    initPagination = () => {

    }
};