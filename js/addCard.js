customElements.define('add-card', 
    class extends HTMLElement {
        constructor(){
            super()
            this.addEventListener('click', function(){
                var getId = this.id
                var id = getId.split("-");
            })
        }

        connectedCallback(){
            this.render();
        }

        render(){
            this.innerHTML = `
            <div class="column-add-cards">+ Add Card</div>
            `
        }
    }
);