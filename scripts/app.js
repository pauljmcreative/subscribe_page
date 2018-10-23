console.log("app.js is working!");

$(document).ready(function(){

//global variables
const baseUrl = 'http://localhost:3000/api/';
const users = 'users/';
const comments = 'comments/';
const zomato = 'https://developers.zomato.com/api/v2.1';
const zomatoKey = "64ec316d35f97e2df01286cf2d5f00df";
const commentResults = document.getElementById('comment-container')
const smallScreen = window.matchMedia('(max-width: 760px)');



/////SMALL SCREEN NAVIGATION/////
  function openCloseMobileNav() {
    $('.fa-bars').toggleClass('hamburger-icon');
    $('.fa-times').toggleClass('close-icon');
    $('.fa-times').toggleClass('hide');
    //toggle dropdown
    $('nav').toggleClass('small-screen-nav');
    $('.nav-buttons').toggleClass('nav-buttons-small-screen');
    $('#navImg').toggleClass('hide');
  };

//////////////REGEX//////////////////
  $('input[type="submit"]').on('click', (event) => {
    let re = /[^a-zA-Z ]/;
    let emailRe = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let firstName = $('input[name="FNAME"]').val();
    let lastName = $('input[name="LNAME"]').val();
    let email = $('input[name="EMAIL"]').val();
    event.preventDefault();

    // Validation
    // if(firstName.length < 2 && lastName.length < 2) {
      if(firstName.length < 2) {
          alert('Please check your first name. The first name must be at least 2 characters long.');
          $('#mce-FNAME').focus();
      } else if (lastName.length < 2) {
          alert('Please check your last name. The last name must be at least 2 characters long.');
          $('#mce-LNAME').focus();
      } else if (re.test(firstName) === true) {
          alert('Please check your first name. The first name cannot contain numbers or special characters.');
          $('#mce-FNAME').focus();
      } else if (re.test(lastName) === true) {
          alert('Please check your last name. The last name cannot contain numbers or special characters.');
          $('#mce-LNAME').focus();
      } else if (email.length <= 7 || emailRe.test(email) == false) {
          alert('Please check your email and make sure it is valid.');
          $('#mce-EMAIL').focus();
    } else {
        $('#mc-embedded-subscribe-form').submit();
    }

   })


     // else if (re.test(firstName) === true || re.test(lastName) === true) {
     //    $('#mce-EMAIL').focus();
     //    console.log('Invalid data');
        
      




  $('.fa-bars, .fa-times, .menu-item').on('click', openCloseMobileNav);
 

});