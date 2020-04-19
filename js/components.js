class DisplayBoard extends HTMLElement {
    constructor(columnId, cardId){
        super();

        let number = "1";

        let template = document.getElementById('display-board');
        let templateContent = template.content;

        this.columnsTemplate = document.createElement('display-columns');
        this.columnsTemplate.setAttribute("id", "column-" + number )

        this.cardsTemplate = document.createElement('display-cards');
        this.cardsTemplate.setAttribute("id", "card-" + number )

        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.appendChild(templateContent.cloneNode(true));

    }

    columnsData(){
        const responseHandler = function() {
            console.log("response text", JSON.parse(this.responseText));
            console.log("status text", this.statusText);
            console.log("status code", this.status);
          };
          
          const request = new XMLHttpRequest();
          
          request.addEventListener("load", responseHandler);
          const url = "http://localhost:3000/columns";
          request.open("GET", url);
          
          request.send();
    }

    cardsData(){
        const responseHandler = function() {
            console.log("response text", JSON.parse(this.responseText));
            console.log("status text", this.statusText);
            console.log("status code", this.status);
          };
          
          const request = new XMLHttpRequest();
          
          request.addEventListener("load", responseHandler);
          const url = "http://localhost:3000/cards";
          request.open("GET", url);
          
          request.send();
    }

    connectedCallback(){
        let rows = this.shadowRoot.querySelector("#rows")
            rows.insertBefore(this.columnsTemplate,rows.firstChild);  

        let cards = this.shadowRoot.querySelector("#column-1").shadowRoot.querySelector("#card")
            cards.appendChild(this.cardsTemplate);        
        
        this.columnsData();
        this.cardsData();
        this.createColumns();
    }

    createColumns(){
        const columnsTemplate = document.createElement('display-columns')
        let button = this.shadowRoot.querySelector("#add-button")
        let form = this.shadowRoot.querySelector("#form")
        
        button.addEventListener("click", () => {
            form.parentNode.insertBefore(columnsTemplate,form);
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

    static get observedAttributes() { 
        console.log("is this working")
        return ["column-header-1","column-header", "column-name"]; 
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name == 'column-header-1' || name == 'column-header' || name == "column-name"){
            console.log(name);
            console.log("this is the old value ", oldValue);
            console.log("this is the new value ", newValue)
            console.log('attributes changed.');
        }
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
}


customElements.define('display-cards', DisplayCards);
customElements.define('display-columns', DisplayColumns);
customElements.define('display-board', DisplayBoard);