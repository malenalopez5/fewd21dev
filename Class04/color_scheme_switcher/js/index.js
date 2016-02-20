document.getElementById('greyButton').onclick = switchGrey;
document.getElementById('whiteButton').onclick = switchWhite;

function switchGrey() {
  document.body.style.backgroundColor = 'grey';
  document.body.style.color = 'white';
}

function switchWhite() {
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black';
}