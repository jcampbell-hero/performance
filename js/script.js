//Initialization for form submission
var button = document.getElementById("btnSubmit");
var fname;
var lname;

//Adding content to the header, after a 2 second delay to emulate a poorly optimized script
setTimeout(function(){
    console.log("Script completed");

    var newImage=document.createElement("img");
    newImage.setAttribute('src','images/site-logo-75.jpg');
    newImage.setAttribute('alt','');
    var headerElement=document.getElementById("header");
    headerElement.prepend(newImage);

    var navElement=document.getElementById("nav");
    var newAlert=document.createElement("div");
    newAlert.setAttribute('id','alert');
    newAlert.innerText="Alert message: This site may be poorly optimized.";
    navElement.append(newAlert);
}, 2000);

//From submission validation and success message display
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