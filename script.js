const container = document.getElementById("container");
let rows = document.getElementsByClassName("rows");
let cells = document.getElementsByClassName("cell");
let resetButton = document.getElementById("resetButton");
let alreadyClicked = false;

resetButton.addEventListener("click", function(e) {
    window.location.reload("Refresh");
});

function createRows(rowNum) {
    for (let i = 0; i < rowNum; i++) {
        let row = document.createElement("div");
        container.appendChild(row).className="rows";
    }
}

function createCells(cellNum) {
    for (let j = 0; j < rows.length; j++) {
        for (let c = 0; c < cellNum; c++) {
            let cell = document.createElement("div");
            cell.addEventListener("mouseenter",function(){
                cell.classList.add("cellHover");
            });
            rows[c].appendChild(cell).className="cell";


        }
    }
}
function createGrid(numberOfRows,numberOfCells) {
    createRows(numberOfRows);
    createCells(numberOfCells);
}

function removeGrid(){
    let cont = document.getElementById("container");
    cont.innerHTML = "";
}


//createGrid 

let goBut = document.getElementById("go");

goBut.addEventListener("click", function() {
    if (alreadyClicked == false){
        let gridInput = document.getElementById("inputField").value;
        if (gridInput > 20) {
            gridInput = 20;
        }
        let inputVal = gridInput;
        console.log(inputVal);
        createGrid(inputVal,inputVal);
        alreadyClicked = true;
    }
    else {
        removeGrid();
        let gridInput = document.getElementById("inputField").value;
        if (gridInput > 20) {
            gridInput = 20;
        }
    let inputVal = gridInput;
    console.log(inputVal);
    createGrid(inputVal,inputVal);
    }
});



