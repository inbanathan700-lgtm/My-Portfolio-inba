const text = "Welcome To My Digital Portfolio";
let i = 0;

function typingEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typingEffect, 100);
    }
}

typingEffect();

function showMessage() {
    alert("Thank you for visiting my portfolio!");
}