import Component from './component.js';

export default class GalleryCellComponent extends Component {
    constructor(data) {
        super(data);

        this.id = data.content.id;
        this.initTemplate(data);
    }

    initTemplate = ({ content, onRemove }) => {
        const galleryCell = document.createElement('div');
        const imageElement = document.createElement('div');
        const imageTitleElement = document.createElement('div');
        const imageTitleText = document.createTextNode(content.imageId);
        const removeButton = document.createElement('div');
        const removeButtonText = document.createTextNode('X');

        // define cell
        galleryCell.setAttribute('id', content.id);
        galleryCell.setAttribute('class', 'gallery__cell');

        // define image element
        imageElement.setAttribute('class', 'gallery__image');
        imageElement.appendChild(content.template);
        // imageElement.setAttribute('style', `background-image: url(${content.src})`);

        // define image title
        imageTitleElement.setAttribute('class', 'gallery__image-title');
        imageTitleElement.appendChild(imageTitleText);

        // define remove button
        removeButton.setAttribute('class', 'gallery__remove_button');
        removeButton.addEventListener('click', () => onRemove(content.id));

        // add elements to cell
        removeButton.appendChild(removeButtonText);
        galleryCell.appendChild(imageElement);
        galleryCell.appendChild(imageTitleElement);
        galleryCell.appendChild(removeButton);
        this.template = galleryCell;
        this.target.appendChild(this.template);
    };
};