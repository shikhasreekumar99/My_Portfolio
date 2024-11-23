flag = 1
function f1() {
    alert("Yeah!!!!Love you 🥰");
}
function f() {
    if (flag == 1) {
        Bn.style.top = 364
        Bn.style.left = 300
        flag = 2
    }
    else if (flag == 2) {
        Bn.style.top = 476
        Bn.style.left = 78
        flag = 3
    }
    else if (flag == 3) {
        Bn.style.top = 358
        Bn.style.left = 147
        flag = 4
    }
    else if (flag == 4) {
        Bn.style.top = 490
        Bn.style.left = 134
        flag = 5
    }
    else if (flag == 5) {
        Bn.style.top = 234
        Bn.style.left = 150
        flag = 6
    }
    else if (flag == 6) {
        Bn.style.top = 441
        Bn.style.left = 245
        flag = 7
    }
    else if (flag == 7) {
        Bn.style.top = 345
        Bn.style.left = 158
        flag = 8
    }
    else if (flag == 8) {
        Bn.style.top = 390
        Bn.style.left = 165
        flag = 9
    }
    else if (flag == 9) {
        Bn.style.top = 231
        Bn.style.left = 349
        flag = 10
    }
    else if (flag == 10) {
        Bn.style.top = 123
        Bn.style.left = 289
        flag = 11
    }
    else if (flag == 11) {
        Bn.style.top = 259
        Bn.style.left = 109
        flag = 12
    }
    else if (flag == 12) {
        Bn.style.top = 300
        Bn.style.left = 170
        flag = 13
    }
    else if (flag == 13) {
        Bn.style.top = 267
        Bn.style.left = 120
        flag = 14
    }

    else if (flag == 14) {
        Bn.style.top = 126
        Bn.style.left = 170
        flag = 15
    }
    else if (flag == 15) {
        Bn.style.top = 298
        Bn.style.left = 347
        flag = 16
    }
    else if (flag == 16) {
        Bn.style.top = 345
        Bn.style.left = 165
        flag = 2
    }
}

document.onkeydown = function(e) {
if(event.keyCode == 123) {
 return false;
}
if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
 return false;
}
if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
 return false;
}
if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
 return false;
}
if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
 return false;
}
}

document.addEventListener('contextmenu', function(e) {
e.preventDefault();
});
