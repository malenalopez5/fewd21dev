$( document ).ready(function() {
    console.log( "ready!" );


$('#greyButton').click(switchGrey);
$('#whiteButton').click(switchWhite);

function switchGrey() {
	$('body').css("background-color", "grey");
	 console.log( "I'm Grey" );
}

function switchWhite() {
	$('body').css("background-color", "white");
	console.log( "I'm white" );
}


});
// document.getElementById('grayButton').onclick = switchGray;
// document.getElementById('whiteButton').onclick = switchWhite;

// function switchGray() {
//   document.body.style.backgroundColor = 'gray';
//  document.body.style.color = 'white';
// }

// function switchWhite() {
//   document.body.style.backgroundColor = 'white';
//   document.body.style.color = 'black';
// }
