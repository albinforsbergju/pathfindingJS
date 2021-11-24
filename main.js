window.onload = createGrid(20, 20);

function createGrid(w = 50, h = 50) {
    let table = document.getElementById("grid-table"),
        tr, td, row, cell;

    table.innerHTML = "";

    for (row = 0; row < w; row++) {
        tr = document.createElement("tr");
        for (cell = 0; cell < h; cell++) {
            td = document.createElement("td");
            td.id = row + "-" + cell;
            td.className = "node";
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}