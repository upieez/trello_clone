window.addEventListener("DOMContentLoaded", () => {

    var board = document.querySelector(".board-rows");
    var inputBoard = document.querySelector(".board-column");
    var addColumn = document.querySelector("#add-column");

    const loadCloumns = () => {
        var responseHandler = function() {
            var result = JSON.parse(this.responseText);
            console.log(result.length);
            var x = 0;
            while (x < result.length) {
                var column = document.createElement('display-column')
                column.setAttribute('id', "column-" + (x + 1));
                column.setAttribute('title', result[x]["title"]);
                inputBoard.parentNode.insertBefore(column,inputBoard);
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
                card.setAttribute('title', result[x]["title"]);

                var column = document.querySelector("#column-"+result[x]["columnId"]);
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

    addColumn.addEventListener("click", function(event){
        var columnTitle = document.querySelector('#inputColumnTitle').value

        if (!columnTitle){
            return;
        } else {
            var responseHandler = function() {
                location.reload();
            };
        
            var request = new XMLHttpRequest();
            var url = `http://localhost:3000/columns`;
            var data = {"title": columnTitle}
        
            request.addEventListener("load", responseHandler);
            request.open("POST", url);
            request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            request.send(JSON.stringify(data));
        }
    })

    loadCloumns();
    loadCards();
})