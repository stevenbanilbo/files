
// // Dynamic Text

// document.getElementById("text1").innerHTML = "Liverpool v Augsburg";
// document.getElementById("text2").innerHTML = "Liverpoorl to win In 90 mins8/1";
// document.getElementById("text3").innerHTML = "£/E 5 bet only | plus £/E5 free bet should your bet loose";

// document.getElementById("step1").innerHTML = "Register & <br> deposit £/E 5<br> or more";
// document.getElementById("step2").innerHTML = "Your Enhanced Odds will display on the Homepage"
// document.getElementById("step3").innerHTML = "If your bet wins your winnings will be paid as a £/E 40 Free bet"





function emailEmpty() {
  if(document.getElementById("userInputEmail").value === ""){ 
    document.getElementById('button').disabled = true; }
  else{ 
    document.getElementById('button').disabled = false;
      }

}




// About Coral Sports Betting
$(function () {
    //accordion
    $("#accordion").accordion({
        
        heightStyle: "content",
        active: false,
        collapsible: true,
    });
    
    $("h5").click(function(){      
      $(this).find('.rotate').toggleClass("down"); 
      $('.rotate').removeClass("down"); 
    })
});


// Email validation


function validateemail() {

var request;

try {

request= new XMLHttpRequest();

}

catch (attempt1) {

  try {

  request= new ActiveXObject("Msxml2.XMLHTTP");
  }

  catch (attempt2) 
  {
  try {
  request= new ActiveXObject("Microsoft.XMLHTTP");
  }

catch (failed) {
request = null;
}
}
}



var url= "emailChecker.php";
var emailaddress= document.getElementById("userInputEmail").value;
var vars= "email="+emailaddress;
request.open("POST", url, true);

request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

request.onreadystatechange= function() {
if (request.readyState == 4 && request.status == 200) {
	var return_data=  request.responseText;
	document.getElementById("emailResult").innerHTML= return_data;
}
}

request.send(vars);
}





//  Terms and Conditions

var modal = document.getElementById("tConditions");
var text = document.getElementById("tConditions-Text");

// span element to close
var span = document.getElementsByClassName("close")[0];

// When user clicks the text, open/displays the modal
text.onclick = function() {
  modal.style.display = "block";
}

// When user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// For click outside modal, close 
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}