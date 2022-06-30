var userdata = JSON.parse(localStorage.getItem("userdetail")) || [];
var btn = document.querySelector("form");
btn.addEventListener("submit", function() {
    singUpdata(userdata)
});

function singUpdata(userdata) {

    event.preventDefault();

    var eml = document.querySelector(".eml");
    var psw = document.querySelector(".psw");
    if (eml.value == "" && psw.value == "") {
        var p = document.querySelector('.eml_error');
        p.innerText = "Enter Your Email";
        var p1 = document.querySelector('.pass_error');
        p1.innerText = "Password is required";

    } else if (eml.value == "") {
        var p = document.querySelector('.eml_error');
        p.innerText = "Enter Your Email";
    } else if (psw.value == "") {
        var p1 = document.querySelector(".pass_error");
        p1.innerText = "Password is required";
    } else {
        var count = 0;
        var count1 = 0;
        var count2 = 0;
        var em = document.querySelector('.eml_error');
        var ps = document.querySelector(".pass_error")


        for (var i = 0; i < userdata.length; i++) {
            if (userdata[i].email == eml.value && userdata[i].password == psw.value) {
                count++;
            } else if (userdata[i].email == eml.value && userdata[i].password != psw.value) {
                count1++;
            } else if (userdata[i].email != eml.value && userdata[i].password == psw.value) {
                count2++;
            }
        }



        if (count > 0) {
            document.location.href = "mainpage.html";
        } else if (count1 > 0) {
            ps.innerText = "Invaild password";
        } else if (count2 > 0) {
            em.innerText = "Invalid email";
        } else {
            ps.innerText = "Invaild password";
            em.innerText = "Invalid email";
        }
    }
}



function checkEml() {

    var eml = document.querySelector(".eml");
    var p = document.querySelector('.eml_error');
    var emailbox = document.querySelector("#emailbox");
    if (eml.value == "") {

        p.innerText = "Please enter a valid email address";

        emailbox.classList.remove("validation");

    } else {

        p.innerText = "";

        emailbox.classList.add("validation");
    }

}

function checkPsw() {
    var psw = document.querySelector(".psw").value;
    var p1 = document.querySelector('.pass_error');
    var passbox = document.querySelector('#passbox');
    if (psw == "") {
        p1.innerText = "Password is required";
        passbox.classList.remove("validation");
    } else {
        p1.innerText = "";
        passbox.classList.add("validation");
    }

}