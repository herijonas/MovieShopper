let btn = document.getElementById('watchlist')
let currentDiv = document.getElementById("card-content");

function displayCard() {
    // create a new div element
    const newDiv = document.createElement("div");

    // and give it some content
    const newContent = document.createTextNode("+++Watchlist added successful!");

    newDiv.style.background = "#0cc477"
    newDiv.style.color = "#fff"
    newDiv.style.padding = "12px"
    newDiv.style.width = "fit-content"
    newDiv.style.marginLeft = "32%"
    newDiv.style.marginTop = "-5.2%"
    newDiv.style.position = "absolute"
    newDiv.style.zIndex = "2"
    newDiv.style.fontFamily = "sans-serif"

    // add the text node to the newly created div
    newDiv.appendChild(newContent);

    // add the newly created element and its content into the DOM
    currentDiv.appendChild(newDiv)
    currentDiv.style.display = "flex"

    if (currentDiv.lenght > 1) {
        removeEventListener(newDiv)
    }
}