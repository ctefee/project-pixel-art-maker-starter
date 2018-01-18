// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()

function makeGrid() {
	let input_height = $('#input_height').val(); // get access to height
	var input_width = $('#input_width').val();   // get access to width
	var tbl = $('#pixel_canvas'); // get access to html table

	$(tbl).html(''); // erase the table content

	var tableHtml = ''; // create variable to new table content

	// loop through each table row
	for (var i = 0; i < input_height; i++) {
		tableHtml = tableHtml + '<tr>';
		// loop through each column
		for (var k = 0; k < input_width; k++) {
			tableHtml = tableHtml + '<td onclick="  $(this).css(  \'background-color\', $(\'#colorPicker\').val()  )  "></td>';
		}
		tableHtml = tableHtml + '</tr>';
		console.log(tableHtml);

	}

	$(tbl).html(tableHtml); // put new content into the table
}


/*
<table>

	<tr> // row
		<td  onclick=" $(this).css('background-color', $('#colorPicker').val()  )"></td> // column
		<td  onclick=" $(this).css('background-color', $('#colorPicker').val()  )"></td> // column
	</tr>

</table>
*/
