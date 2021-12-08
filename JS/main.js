let passInput = document.querySelector(".pass");
let passLengthInput = document.querySelector("[type='number']");
let link1 = document.links[0];
let link2 = document.links[1];

function makePass(){
    let characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuwxyz!@#$%^&*()_{}[]<>?|";
    let password = "";
    let passLength = passLengthInput.value;

    for (let i=0; i<passLength; i++){
        password += characters[Math.floor(Math.random() * characters.length)];
    }
    passInput.innerHTML = password;    
}
function makePassWithOutLength(){
    let characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuwxyz!@#$%^&*()_{}[]<>?|";
    let password = "";
    let passLength = 16;

    for (let i=0; i<passLength; i++){
        password += characters[Math.floor(Math.random() * characters.length)];
    }
    passInput.innerHTML = password;    
}
function copyPass() {
    let copyText = document.querySelector(".pass");
    // copyText.select();
    // document.execCommand("copy");
    // document.querySelector(".pass").select();
    // var copyText = document.getElementById("myInput");
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
}
function printHello(){
    console.log("hello JS");
}
// new ClipboardJS(link2);

link1.onclick = function(e){ e.preventDefault(); printHello(); }
link2.onclick = function(e){ e.preventDefault(); makePassWithOutLength(); }

new ClipboardJS('.btn');