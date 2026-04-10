function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");
  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");
    //Call showPopup here
    showPopup(true);
    // Create a new 'recommendation' element and set it's value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class","recommendation");
    element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element); 
    
    // Reset the value of the textarea
    recommendation.value = "";
  }
}

function sendContactEmail(){
var contactMsg = document.getElementById("contact");
var  name = document.getElementById("contact_name");
  if (contactMsg.value != null && contactMsg.value.trim() != "" && name.value != null && name.value.trim() != "")
  {
    console.log("Contact added");
    showPopup(true);
    emailjs.send("service_id", "template_id", {
  from_name: name.value,
  message: contactMsg.value,
  //reply_to: form.email.value, //no email input set up yet
});
  }
  else {alert("invalid contact name or message!")}
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}
