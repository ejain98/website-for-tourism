
//about us
function myFunction() {
    var dot = document.getElementById("dot");
    var read = document.getElementById("read-more");
    var btn = document.getElementById("btn");

    if (dot.style.display === "none") {
        dot.style.display = "inline";
        btn.innerHTML = "Read more";
        read.style.display = "none";
    } else {
        dot.style.display = "none";
        btn.innerHTML = "Read less";

        read.style.display = "inline";
    }
}

//Contact Us page
function formSubmit(form) {

    var subject = document.getElementById("subject");
    var message = document.getElementById("message");

    //for name
    var name = document.getElementById('name');
    if (name.validity.valueMissing) {
        name.setCustomValidity('Please enter the  name');
    }
    else {
        name.setCustomValidity("");
    }

    //for email
    var email = document.getElementById("myemail");

    let mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.validity.valueMissing) {
        email.setCustomValidity('Please enter the  email address');
    }
    else if (email.value.match(email)) {
        email.setCustomValidity("");
    }
    else {
        email.setCustomValidity("Email " + email.value + " is not a correct format. Please enter a correct format");
    }

    //for subject
    if (subject.validity.valueMissing) {
        subject.setCustomValidity('Please enter the  subject of your mail');
    }
    else {
        subject.setCustomValidity("");
    }

}










