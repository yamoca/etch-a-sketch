const container = document.querySelector("div");
const etchCanvas = document.createElement("div");

const width = 500;
const height = 500;
const gap = 1;
const columns_and_rows = 16;

etchCanvas.style.width = (width + gap * columns_and_rows).toString() + "px";
etchCanvas.style.height = (height + gap * columns_and_rows).toString() + "px";
etchCanvas.style.display = "flex";
etchCanvas.style.flexWrap = "wrap";
etchCanvas.style.gap = gap.toString() + "px";

container.appendChild(etchCanvas);

for(let i = 0; i < columns_and_rows*columns_and_rows; i++) {
    newPixel = document.createElement("div");
    newPixel.style.backgroundColor = "pink";
    newPixel.addEventListener("mouseover", function (e) {
        e.target.style.backgroundColor = "green";
    });

    w = (width/columns_and_rows).toString() + "px";
    newPixel.style.width = w; 

    h = (height/columns_and_rows).toString() + "px";
    newPixel.style.height = h; 

    etchCanvas.appendChild(newPixel);
}

function newGrid() {
    const columns_and_rows = parseFloat(prompt("How big do you want the grid to be? (enter a single number < 100 which will be used for the number of columns and rows)"));
    if (Number.isInteger(columns_and_rows) && columns_and_rows <= 100) {
        etchCanvas.replaceChildren();
        container.replaceChildren();

        etchCanvas.style.width = (width + gap * columns_and_rows).toString() + "px";
        etchCanvas.style.height = (height + gap * columns_and_rows).toString() + "px";
        etchCanvas.style.display = "flex";
        etchCanvas.style.flexWrap = "wrap";
        etchCanvas.style.gap = gap.toString() + "px";

        container.appendChild(etchCanvas);

        for(let i = 0; i < columns_and_rows*columns_and_rows; i++) {
            newPixel = document.createElement("div");
            newPixel.style.backgroundColor = "pink";
            newPixel.addEventListener("mouseover", function (e) {
                e.target.style.backgroundColor = "green";
            });

            w = (width/columns_and_rows).toString() + "px";
            newPixel.style.width = w; 

            h = (height/columns_and_rows).toString() + "px";
            newPixel.style.height = h; 

            etchCanvas.appendChild(newPixel);
        }
    }
}