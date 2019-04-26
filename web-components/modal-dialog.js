class ModalDialog extends HTMLElement {
    connectedCallback() {
        const template = document.querySelector("template#modal-dialog");
        const node = document.importNode(template.content, true);

        this.appendChild(node);
    }

    static get observedAttributes() {
        return ['open'];
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        if (newVal !== oldVal) {
            this[attrName] = this.hasAttribute(attrName);
        }
    }

    get open() {
        return this.hasAttribute('open');
    }
}

customElements.define('modal-dialog', ModalDialog);