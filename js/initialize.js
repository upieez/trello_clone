window.addEventListener("DOMContentLoaded", () => {

    var board = document.querySelector(".board-rows");

    const loadCloumns = () => {
        var responseHandler = function() {
            var result = JSON.parse(this.responseText);
            console.log(result.length);
            var x = 0;
            while (x < result.length) {
                var column = document.createElement('display-column')
                column.setAttribute('id', "column-" + (x + 1));
                column.setAttribute('title', result[x]["title"]);
                board.prepend(column);
                x++;
            }
        };
        
        var request = new XMLHttpRequest();
        var url = "http://localhost:3000/columns";
        
        request.addEventListener("load", responseHandler);
        request.open("GET", url);
        request.send();
    }

    const loadCards = () => {
        var responseHandler = function() {
            var result = JSON.parse(this.responseText);
            console.log(result.length);
            var x = 0;
            while (x < result.length) {
                var card = document.createElement('display-card')
                card.setAttribute('slot', result[x]["title"]);
                card.setAttribute('title', result[x]["title"]);

                var column = document.querySelector("#column-"+result[x]["columnId"]);
                console.log(column);
                var columnCard = column.shadowRoot.querySelector("#column-cards");
                columnCard.appendChild(card);
                x++;
            }
        };
        
        var request = new XMLHttpRequest();
        var url = "http://localhost:3000/cards";
        
        request.addEventListener("load", responseHandler);
        request.open("GET", url);
        request.send();
    }


    loadCloumns();
    loadCards();

})