
// Declare all variables
var rows, cols, color, reset;

// Grid Builder

$(document).ready(function() {

  // Listen to submit event
  $('#sizePicker').submit(function makeGrid(e) {
    // remove already created table rows
    $('table tr').remove();
    // get values of rows and cols 
    rows = $('#inputHeight').val(); 
    cols = $('#inputWeight').val(); 

    for (var i = 0; i < rows; i++){
      // Append tr to the table for every iteration
      $('table').append('<tr></tr>');
      // iterate over number of rows
      for (var j = 0; j < cols; j++){
        // Append td to each table row
        $('tr:last').append('<td></td>');
        //Set the class attribute for each table data
        $('td').attr('class', 'cells');
      }
    }

    e.preventDefault();
    
    $('.cells').mouseover(function(e){
      // get the value of the selected color
       color = $('#colorPicker').val();
       // get the targetd element(cell) on the DOM and set its background color to the color picked by the user
       $(e.target).css('background-color', color);
    })

  })

  // function to rest the cells and start over again
  $('#resetBtn').click(function reset (){
    // Clear the generated  cells
    $('#pixelCanvas').html('');
  
  });

});

// for the responsive side meu

function openSlideMenu(){
  document.getElementById('side-menu').style.width = '350px';
  document.getElementById('output').style.marginLeft = '200px';
}

function closeSlideMenu(){
  document.getElementById('side-menu').style.width = '0';
  document.getElementById('output').style.marginLeft = '0';
