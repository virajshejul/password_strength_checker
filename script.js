function checkStrength() {
    let password = document.getElementById("password").value;
    let bar = document.getElementById("bar");
    let txt = document.getElementById("strengthText");

    let strength = 0;

    if (password.length >= 6) strength++;
    if (password.match(/[0-9]/)) strength++;
    if (password.match(/[A-Z]/)) strength++;
    if (password.match(/[a-z]/)) strength++;
    if (password.match(/[^a-zA-Z0-9]/)) strength++;

    if (strength === 0) {
        bar.style.width = "0%";
        txt.innerText = "Strength: —";
    }
    else if (strength === 1) {
        bar.style.width = "20%";
        bar.style.background = "red";
        txt.innerText = "Strength: Very Weak";
    }
    else if (strength === 2) {
        bar.style.width = "40%";
        bar.style.background = "orange";
        txt.innerText = "Strength: Weak";
    }
    else if (strength === 3) {
        bar.style.width = "60%";
        bar.style.background = "yellow";
        txt.innerText = "Strength: Medium";
    }
    else if (strength === 4) {
        bar.style.width = "80%";
        bar.style.background = "lightgreen";
        txt.innerText = "Strength: Strong";
    }
    else if (strength === 5) {
        bar.style.width = "100%";
        bar.style.background = "green";
        txt.innerText = "Strength: Very Strong 🔥";
    }
}
