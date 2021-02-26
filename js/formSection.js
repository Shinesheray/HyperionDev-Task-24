// this is the javascript page for the form section , I thought it would be neater to separate the pages for Task 20

window.postComment = function()
{
var div = document.getElementById("comments");

div.innerHTML = div.innerHTML +"<br>"+ '"'+document.getElementById("comment").value+ '"';

alert("your comment has been posted")

}


/////////////////////////////////////////////////////////////////// form for likes  
// we will now select our button via document.getElement
let btn = document.getElementById("btn1");

function Toggle(){ // Here we create a toggle for the selsected like to be 

  if (btn.classList.contains("far")) {
    btn.classList.remove("far");
    btn.classList.add("fas");
  } else {
    btn.classList.remove("fas"); // We swapp it arround here to make it go empty if the user unlikes
    btn.classList.add("far");
  }
  

}



// we will now select our button via document.getElement
let btn2 = document.getElementById("btn2");

function Toggle2(){ // Here we create a toggle for the selsected like to be 

  if (btn2.classList.contains("far")) {
    btn2.classList.remove("far");
    btn2.classList.add("fas");
  } else {
    btn2.classList.remove("fas"); // We swapp it arround here to make it go empty if the user unlikes
    btn2.classList.add("far");
  }
  

}



// we will now select our button via document.getElement
let btn3 = document.getElementById("btn3");

function Toggle3(){ // Here we create a toggle for the selsected like to be 

  if (btn3.classList.contains("far")) {
    btn3.classList.remove("far");
    btn3.classList.add("fas");
  } else {
    btn3.classList.remove("fas"); // We swapp it arround here to make it go empty if the user unlikes
    btn3.classList.add("far");
  }
  

}

 
// we will now select our button via document.getElement
let btn4 = document.getElementById("btn4");

function Toggle4(){ // Here we create a toggle for the selsected like to be 

  if (btn4.classList.contains("far")) {
    btn4.classList.remove("far");
    btn4.classList.add("fas");
  } else {
    btn4.classList.remove("fas"); // We swapp it arround here to make it go empty if the user unlikes
    btn4.classList.add("far");
  }
  

}



// we will now select our button via document.getElement
let btn5 = document.getElementById("btn5");

function Toggle5(){ // Here we create a toggle for the selsected like to be 

  if (btn5.classList.contains("far")) {
    btn5.classList.remove("far");
    btn5.classList.add("fas");
  } else {
    btn5.classList.remove("fas"); // We swapp it arround here to make it go empty if the user unlikes
    btn5.classList.add("far");
  }
  

}


///////////////////////////////////////////////////////////////////////// This sectron is for the contact me form page


 var fields = []; // We need to add all the fields into an object array 


 // now we Linking all the fields to our fields object
 function addPerson() {
  
  let newUser = new User(
      document.getElementById('firstName').value,
      document.getElementById('lastName').value,
      document.getElementById('email').value,
      document.getElementById('address').value,
      document.getElementById('houseNumber').value,
      document.getElementById('city').value,
      document.getElementById('newsletter').value,
      document.getElementById('question').value
  );
  fields.push(newUser);
  sessionStorage.setItem("persons", JSON.stringify(fields));
  console.log(sessionStorage)
}

 // user object, we use this to add the values under the same roof 
 function User(firstName, lastName, address, city, email, newsletter, question) {
  this.firstName = firstName;
  this.lastName = lastName;

  this.address = address;
  this.city = city;
  this.email = email;
  this.newsletter = newsletter;
  this.question = question;
  }

 // when user sends contact information we will alert them and add them to session storage
 function sendContact() {
  addPerson(); // calling the add person function to add them to the object array
 
     alert(`${firstName.value} thanks for contacting us we will get back to you Shortly`);


 }



 // references: 
// I was able to get the method for the post from stack overflow which posts users commments https://www.codebrainer.com/blog/contact-form-in-javascript
// I was able to get the Like section from a youtube video from https://www.youtube.com/watch?v=rEXfjA0FkdU&ab_channel=doctorcode 
// I found a method to create the contact us form section from https://www.codebrainer.com/blog/contact-form-in-javascript