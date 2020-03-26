$(document).ready(function() {
	console.log('JavaScipt is working');

	//on click function
	$('form').submit(function(event) {
		event.preventDefault();
    console.log('click');
    let side1 = parseInt($("#side-1").val());
    let side2 = parseInt($("#side-2").val());
    let side3 = parseInt($("#side-3").val());
    if(side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2){
      $(".output").replaceWith(`<h3 class="output">Not a Triangle</h3>`)
    } else if (side1 === side2 && side2 === side3){
      $(".output").replaceWith(`<h3 class="output">Equilateral Triangle</h3>`)
		}
	});
});
 