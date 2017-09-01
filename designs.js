$(function() {

    // Select color input
    // Select size input
    let $color = $("#colorPicker");
    let color = $color.val();
    let $height = $("#input_height");
    let $width = $("#input_width");
    let $table = $("#pixel_canvas");

    // When size is submitted by the user, call makeGrid()
    $('#sizePicker').submit((e) => {

        e.preventDefault();

        makeGrid();

    });

    $color.change((e) => {

        color = e.target.value;

    });

    function makeGrid() {

        $table.html("");

        // Your code goes here!
        let height = $height.val();
        let width = $width.val();
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

        $table.html(tableContent);

        $(".grid").click((e) => {

            e.preventDefault();

            $(e.target).css({ "background-color": color });

        });

    }

});