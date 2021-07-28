let timeout;
let password = document.getElementById('passit');
let indicator = document.getElementById('passindicator');
let mediumIndicator = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
let strongIndicator = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))');

function checkStrength(parameter) {
    if(strongIndicator.test(parameter)) {
        indicator.style.background = "green";
        indicator.textContent = "Stong";
    } else if(mediumIndicator.test(parameter)) {
        indicator.style.background = "blue";
        indicator.textContent = "Medium";
    } else {
        indicator.style.background = "red";
        indicator.textContent = "Weak";
    }
}

password.addEventListener("input", () => {
    indicator.style.display = "block";
    clearTimeout(timeout);
    timeout = setTimeout(() => checkStrength(password.value), 500);
    if(password.value.length !==0) {
        indicator.style.display != "block";
    } else {
        indicator.style.display = "none";
    }
});