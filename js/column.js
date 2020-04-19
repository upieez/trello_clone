class DisplayColumn extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this._title = "Default Title";
    }

    get title() {
        return this.getAttribute("title");
    }

    set title(value){
        this.setAttribute("title", value);
    }

    static get observedAttributes() {
        return ["title"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch(name){
            case 'title':
                this._title = newValue;
        }
    }

    connectedCallback(){
        this.render();
    }

    render(){
        var template = 
        `
        <style>
            .board-column {
                border-radius: 10px;
                display: grid;
                padding: 10px;
                height: max-content;
                grid-auto-rows: max-content;
                grid-gap: 10px;
                background-color: cornflowerblue;
            }
  
            .column-header {
                font-weight: bolder;
                font-size: 24px;
            }

            .column-add-cards{
                padding: 5px;
                cursor: pointer;
            }
        </style>
        <div class="board-column">
            <div class="column-header">
                <slot name="column-header">${this.title}</slot>
            </div>
            <div class="column-cards">
                <slot name="card"></slot>
            </div>
            <div class="column-add-cards" id="add-card">+ Add Card</div>
        </div>
        `;
        this.shadow.innerHTML = template;
    }
}

customElements.define('display-column', DisplayColumn);

