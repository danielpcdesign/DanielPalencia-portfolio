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
    //button react when submiting
    var btn = document.getElementById("submit_btn");
    btn.disabled = true;
    btn.innerText = "Sending...";
    
    console.log("Contact email attempting send...");
    emailjs.send("service_7ho8bco", "template_l8hrcfm", {
    from_name: name.value,
    message: contactMsg.value,
  //reply_to: form.email.value, //no email input set up yet
    }) 
    .then(function(response) {
      console.log("Email sent successfully!", response.status, response.text);
      showPopup(true);
      // Clear fields after success
      name.value = "";
      contactMsg.value = "";
    })
    .catch(function(error) {
      console.error("Email failed to send:", error);
      alert("Something went wrong. Please try again.");
    })
    .finally(function(){
      //reset btn
      btn.disabled = false;
      btn.innerText = "Send";
    });
  }
  else {alert("invalid contact name or message!");}
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}
