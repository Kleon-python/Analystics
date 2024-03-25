let buttons = document.querySelectorAll('.butt1');
for (const button of buttons) {
    button.addEventListener('click', () => {
        button.style.display = 'none';
    });
}
let buttons2 = document.querySelectorAll('.butt2');
for (const button1 of buttons2) {
    button1.addEventListener('click', () => {
        button1.style.display = 'none';
    });
}

let buttons3 = document.querySelectorAll('.butt0');
for (const button3 of buttons3) {
    button3.addEventListener('click', () => {
        button3.style.display = 'none';
    });
}

let theinput;
let thebutton = document.getElementById('inputbutton');
thebutton.onclick = () => {
    theinput = document.getElementById('inputid');
    theinput.value = eval(theinput.value);
}
