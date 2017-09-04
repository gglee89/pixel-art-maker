
// Select color input
// Select size input
let colorEl = document.getElementById("colorPicker");
let sizePickerEl = document.getElementById("sizePicker");
let color = colorEl.value;
let heightEl = document.getElementById("input_height");
let widthEl = document.getElementById("input_width");
let tableEl = document.getElementById("pixel_canvas");

// Handle the submit button event
sizePickerEl.addEventListener('submit', (e) => {

    e.preventDefault();

    makeGrid();

});

// Update the color that is used to paint
colorEl.addEventListener('change', (e) => {

    color = e.target.value;

});

// Render/Draw the grid
// Add click event listener that will render the paint
function makeGrid() {

    tableEl.innerHTML = "";

    // Your code goes here!
    let height = heightEl.value;
    let width = widthEl.value;
    let tableContent = "<tbody>";

    for(let i = 0; i < height; i++) {

        tableContent += "<tr>";

        for (let j = 0; j < width; j++) {

            tableContent += "<td class=\"grid\">";
            tableContent += "</td>";

        }

        tableContent += "</tr>";

    }

    tableContent += "</tbody>";

    tableEl.innerHTML = tableContent;

    let grid_list = document.getElementsByClassName('grid');

    for (let i = 0; i < grid_list.length; i++) {

        grid_list[i].addEventListener('click', (e) => {

            e.preventDefault();

            e.target.setAttribute("style", "background-color: " + color);

        });

    }

}