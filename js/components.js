class DisplayBoard extends HTMLElement {
    constructor(columnId, cardId){
        super();

        let number = "1";

        let template = document.getElementById('display-board');
        let templateContent = template.content;

        this.columnsTemplate = document.createElement('display-columns');
        this.columnsTemplate.setAttribute("id", "column-" + number );
        this.columnsTemplate.setAttribute("content", "Titleeeeeeee");

        this.cardsTemplate = document.createElement('display-cards');
        this.cardsTemplate.setAttribute("id", "card-" + number );

        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.appendChild(templateContent.cloneNode(true));

    }

    connectedCallback(){
        let rows = this.shadowRoot.querySelector("#rows")
            rows.insertBefore(this.columnsTemplate,rows.firstChild);  

        let cards = this.shadowRoot.querySelector("#column-1").shadowRoot.querySelector("#card")
            cards.appendChild(this.cardsTemplate);        
        
        this.createColumns();
        this.createCards();
    }

    createColumns(){
        let button = this.shadowRoot.querySelector("#add-column")
        let form = this.shadowRoot.querySelector("#form")
        button.addEventListener("click", () => {
            form.parentNode.insertBefore(document.createElement('display-columns'),form);
        })
    }

    createCards(){
        let button = this.shadowRoot.querySelector("#column-1")
                    .shadowRoot.querySelector("#add-card")
        let column = this.shadowRoot.querySelector("#column-1")
                    .shadowRoot.querySelector("#card")
        
        button.addEventListener("click", () => {
            column.appendChild(document.createElement('display-cards'));
        })
    }
}

class DisplayColumns extends HTMLElement {
    constructor(){
        super();
        let template = document.getElementById('display-columns');
        let templateContent = template.content;

        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.appendChild(templateContent.cloneNode(true));
    }

    get content() {
        return this.getAttribute("content");
    }

    set content(value){
        this.setAttribute("content", value);
    }

    static get observedAttributes() {return ["content"];}

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(name, oldValue, newValue);
        this.render();
        this.shadowRoot.querySelector(".column-name")
        .addEventListener('focus',this.saveTitle.bind(this));
    }

    saveTitle(){
        this.addEventListener("blur", function(){
            document.querySelector("body > display-board")
                    .shadowRoot.querySelector("#column-1")
                    .setAttribute("content", document.querySelector("body > display-board")
                    .shadowRoot.querySelector("#column-1")
                    .shadowRoot.querySelector("div > div.column-header > div")
                    .innerText)
        })
    }
    
    connectedCallback(){
        this.render();
        this.shadowRoot.querySelector(".column-name")
            .addEventListener('focus',this.saveTitle.bind(this));
    }

    render(){
        let columnHeader = this.shadowRoot.querySelector(".column-header")
        columnHeader.innerHTML = `
                <div class="column-name" slot="column-name" contenteditable>${this.content}</div>
        `
    }
}

class DisplayCards extends HTMLElement {
    constructor(){
        super();

        let template = document.getElementById('display-cards');
        let templateContent = template.content;

        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.appendChild(templateContent.cloneNode(true));
    }
    
    connectedCallback(){
        let cardName = this.shadowRoot.querySelector(".cards");
        cardName.innerHTML = `<div slot="card-name"> WOWOWOWOWOWOWO </div>`
    }
}


customElements.define('display-cards', DisplayCards);
customElements.define('display-columns', DisplayColumns);
customElements.define('display-board', DisplayBoard);