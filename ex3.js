const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
});




$(window).on("hashchange", function(){
    if (location.hash.slice(1) == "signup"){
        $(".forms-container").addClass("extend");
        $("#signin").removeClass("active");
        $("#signup").addClass("active");
    }
    else{
        $(".forms-container").removeClass("extend");
        $("#login").addClass("active");
        $("#signup").removeClass("active");
    }
});
$(window).trigger("hashchange");




function validateLoginForm() {
    var Username = document.getElementById("logName").value;
    var Password = document.getElementById("logPassword").value;

    if (Username == "" || Password == "") {
        document.getElementById("errorMsg").innerHTML = "Please fill the required fields"
        return false;
    }

    else if (Password.length < 8) {
        document.getElementById("errorMsg").innerHTML = "Your password must include atleast 8 characters"
        return false;
    }

    else {
        alert("Successfully logged in");
        return true;
    }
}




function validateSignupForm() {
    var Email = document.getElementById("signEmail").value;
    var Username = document.getElementById("signName").value;
    var Password = document.getElementById("signPassword").value;

    if (Email == "" || Username == "" || Password == ""){
        document.getElementById("errorMsg").innerHTML = "Please fill nthe required fields"
        return false;
    }

    else if (Password.length < 8){
        document.getElementById("errorMsg").innerHTML = "Your password must include atleast 8 characters"
        return false;
    }

    else {
        alert("Successfully signed up");
        return true;
    }
}

