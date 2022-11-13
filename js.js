let box = document.getElementById("box"),
    left = document.getElementById("left"),
    right = document.getElementById("right");


arr = ["Ferrari", "Porshe", "Bmw", "Mercedes"];

box.innerHTML = arr[0];


var i = 0;
right.addEventListener('click', function() {
    i++;
    if (i == 4) {
        i = 0;
    }
    box.innerHTML = arr[i];
})

left.addEventListener('click', function() {
    i--;
    if (i == -1) {
        i = arr.length - 1;
    }
    box.innerHTML = arr[i];
})