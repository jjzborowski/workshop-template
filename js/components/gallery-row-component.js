import Component from './component.js';
import GalleryCellComponent from './gallery-cell-component.js';

export default class GalleryRowComponent extends Component {
    constructor(data) {
        super(data);

        this.initTemplate(data.content);
    }

    initTemplate = (content) => {
        const galleryRow = document.createElement('div');

        galleryRow.setAttribute('class', 'gallery__row');
        this.template = galleryRow;
        this.target.appendChild(this.template);

        if (content) {
            content.forEach(image => {
                let galleryCell = new GalleryCellComponent({target: this.template, content: image});
                // galleryRow.appendChild(image.template);
            });
        }
    };
};