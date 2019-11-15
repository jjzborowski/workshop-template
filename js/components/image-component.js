import Component from './component.js';

export default class ImageComponent extends Component {
    constructor(data) {
        super(data);

        this.id = data.id;
        this.imageId = data.content.id;
        this.initTemplate(data);
    }

    initTemplate = ({ content }) => {
        const image = document.createElement('img');

        image.setAttribute('src', content.src);
        this.template = image;
        this.target.appendChild(this.template);
    };
};