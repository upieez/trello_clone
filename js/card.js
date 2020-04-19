class DisplayCard extends HTMLElement {
    constructor(){
        super();

        this.shadow = this.attachShadow({mode: 'open'});
        this._title = "Default Title";
        this._description = "";
    }

    get title() {
        return this.getAttribute("title");
    }

    set title(value){
        this.setAttribute("title", value);
    }

    get description(){
        return this.getAttribute("description");
    }

    set description(value){
        this.setAttribute("description", value)
    }

    static get observedAttributes() {
        return ["title","description"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch(name){
            case 'title':
                this._title = newValue;
            case 'description':
                this._description = newValue;
        }
    }
    
    connectedCallback(){
        this.render();
    }

    render(){
        var template = 
        `
        <style>
        .cards {
            background-color: white;
            margin-top: 10px;
            border-radius: 5px;
            padding: 10px;
            cursor:pointer;
        }
        </style>
        <div class="cards">
            <slot name="card-title">
                ${this.title}
            </slot>
        </div>
        `;
        this.shadow.innerHTML = template;
    }
}

customElements.define('display-card', DisplayCard);