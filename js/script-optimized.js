// Basic script for validation of form required fields and display of a success message.
var button = document.getElementById("btnSubmit");
var fname;
var lname;

button.addEventListener("click",buttonClick);
function buttonClick(){
    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    console.log(fname+" "+lname);

    if(fname.length < 1 || lname.length < 1){
        alert("All fields are required.");
        return;
    }

    var submissionElement=document.getElementById("nameForm");
    submissionElement.innerHTML="Submission received! Thank you, "+fname+" "+lname+".";
}