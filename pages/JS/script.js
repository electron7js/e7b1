function clock() {
    document.getElementById("clock").innerHTML = showDateTime();
    setTimeout(clock, 1000);
}
function showDateTime() {
    const d = new Date();
    year = d.getFullYear();
    month = d.getMonth();
    day = d.getDate();
    hours = d.getHours();
    minutes = d.getMinutes();
    seconds = d.getSeconds();
    day = doubledigit(day);
    month = doubledigit(month);
    hours = doubledigit(hours);
    minutes = doubledigit(minutes);
    seconds = doubledigit(seconds);
    return (year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds);
}
function doubledigit(num) {
    if (parseInt(num) < 10) {
        return "0" + num;
    }
    else {
        return num;
    }
}
var i = 0;
imageurls = Array("slide1.jpg", "slide2.jpg", "slide3.jpg", "slide4.jpg");

function autoslide() {
    document.getElementById("slider").style.backgroundImage = "url(\"images/" + imageurls[i] + "\")";

    if (i > imageurls.length - 2) {
        i = 0;
    }
    else {
        i++;
    }
    setTimeout(autoslide, 4000);
}

function slide() {
    document.getElementById("slider").style.backgroundImage = "url(\"images/" + imageurls[i] + "\")";

    if (i > imageurls.length - 2) {
        i = 0;
    }
    else {
        i++;
    }
}

function validate() {
    count = 0;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var phoneRegex = /[^0-9+]/
    if (document.getElementById("name").value === "") {
        alert("Name Cannot be empty");
        count++;
    }
    if (document.getElementById("phoneno").value === "") {
        alert("Phone number Cannot be empty");
        count++;
    }
    if (document.getElementById("email").value === "") {
        alert("Email Cannot be empty");
        count++;
    }
    else {
        if (!document.getElementById("email").value.match(validRegex)) {
            alert("invalid email, please enter a valid email");
            count++;
        }
    }
    if (document.getElementById("phoneno").value.length < 7) {
        alert("Phone number length must be greater than 7 numbers");
        count++;
    }
    else {
        if (document.getElementById("phoneno").value.match(phoneRegex)) {
            alert("Phone number has non  valid characters");
            count++;
        }
    }

    if (document.getElementById("message").value === "") {
        alert("Message Cannot be empty");
        count++;
    }
    if (count == 0) {
        document.getElementById("contactform").submit();
    }
}