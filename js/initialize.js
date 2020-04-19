window.addEventListener("DOMContentLoaded", () => {

    var board = document.querySelector(".board-rows");

    var responseHandler = function() {
        var result = JSON.parse(this.responseText);
        console.log(result.length);
        let x = 0;
        while (x < result.length) {
            var column = document.createElement('display-column')
            column.setAttribute('title', result[x]["title"]);
            board.prepend(column);
            x++;
        }
    };
    
    var request = new XMLHttpRequest();
    
    request.addEventListener("load", responseHandler);
    
    var url = "http://localhost:3000/columns";
    request.open("GET", url);
    
    request.send();
})