$(document).ready(function() {
  /* For the sticky navigation
  $('.js--main-content').waypoint(function(direction) {
    if (direction == "down") {
        $('.main-navigation').addClass('sticky');
    } else {
        $('.main-navigation').removeClass('sticky');
    }
  }, {
  offset: '200px;'
  });*/

  $("#booking-form").validate({
    errorClass: "error fail-alert",
    validClass: "valid success-alert",
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      email:{
        required: true,
        email: true
      },
      returndate: { 
        required: true,
      },
      departuredate: { 
        required: true,
      }
    },
    messages:{
      name: {
        required: "This field is required.",
        minlength: "Requires 2 or more characters."
      },
      email: {
        required: "This field is required.",
        email: "You have inputted an invalid email."
      },
      returndate: {
        required: "This field is required.",
      },
      departuredate: {
        required: "This field is required.",
      }
    }
  });
});


