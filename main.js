const container = document.querySelector("div");
const etchCanvas = document.createElement("div");

const width = 500;
const height = 500;
const gap = 5;
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

    w = (width/columns_and_rows).toString() + "px";
    console.log(w)
    newPixel.style.width = w; 

    h = (height/columns_and_rows).toString() + "px";
    console.log(h)
    newPixel.style.height = h; 

    etchCanvas.appendChild(newPixel);
}