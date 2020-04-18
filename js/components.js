customElements.define('display-columns',
    class extends HTMLElement {
        constructor(){
            super();
            let template = document.getElementById('display-columns');
            let templateContent = template.content;

            const shadowRoot = this.attachShadow({mode: 'open'})
                .appendChild(templateContent.cloneNode(true));
        }
    }
);