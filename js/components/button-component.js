import Component from './component.js';

export default class ButtonComponent extends Component {
    constructor(data) {
        super(data);

        this.id = data.id;
        this.initTemplate(data);
    }

    initTemplate = ({ content, onClickHandler }) => {
        const button = document.createElement('button');
        const buttonText = document.createTextNode(content);
        button.appendChild(buttonText);
        button.addEventListener('click', onClickHandler);
        this.template = button;
        this.target.appendChild(this.template);
    };
};