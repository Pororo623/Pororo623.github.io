function change_image(source, one, two) {
    if (document.getElementById(source).src.includes(one)) {
        document.getElementById(source).src = two;
    } else {
        document.getElementById(source).src = one;
    }
}

function butter() {
  if (document.getElementById('two').src.includes('assets/images/final-03.png')) {
      document.getElementById('two').src = 'assets/images/final-07.png';
  } else if (document.getElementById('two').src.includes('assets/images/final-07.png')) {
      document.getElementById('two').src = 'assets/images/final-04.png';
  } else {
      document.getElementById('two').src = 'assets/images/final-03.png';
  }
}

function three() {
  change_image('three', 'assets/images/final-06.png', 'assets/images/final-05.png');
}

function four() {
  change_image('four', 'assets/images/final-24.png', 'assets/images/final-25.png');
}

function five() {
  change_image('five', 'assets/images/final-26.png', 'assets/images/final-27.png');
}

function six() {
  change_image('six', 'assets/images/final-28.png', 'assets/images/final-29.png');
}

setInterval(butter, 900);
setInterval(three, 500);
setInterval(four, 600);
setInterval(five, 700);
setInterval(six, 800);




let home_button = document.getElementById('home');
let ing_button = document.getElementById('ing');
let mat_button = document.getElementById('mat');
let dir_button = document.getElementById('dir');

var sec_but1 = document.getElementById('sugar');
var sec_but2 = document.getElementById('sheet');
var sec_but3 = document.getElementById('mix');


function page_change(site) {
  window.location.href = site;
}

function home() {
  page_change("index.html");
}

function ing() {
  page_change("ingredients.html");
}

function mat() {
  page_change("materials.html");
}

function dir() {
  page_change("directions.html");
}

home_button.onclick = home;
ing_button.onclick = ing;
mat_button.onclick = mat;
dir_button.onclick = dir;
sec_but1.onclick = ing;
sec_but2.onclick =  mat;
sec_but3.onclick = dir;
