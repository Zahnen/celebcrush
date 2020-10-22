// $(document).ready(function () {
//   $("form#userInfo").submit(function(event) {
//     const age = parseInt($("input#age").val());
//     const sign = $("#sign").val();
//     const commitment = $("input:radio[name=commitment]:checked").val();
//     if (age) {
//       if (age>30) {
//         $("#celebfinal").append("Brad Pitt")
//       } else if (age <= 30) {
//         $("#celebfinal").append("Harry Styles")
//     } else {
//       alert('Please enter your age.');
//     }


//     $("#results").show();

//     event.preventDefault();
//     };
//   });
// });

// (function() {
//   'use strict';
//   window.addEventListener('load', function() {
//     var forms = document.getElementsByClassName('needs-validation');
//     var validation = Array.prototype.filter.call(forms, function(form) {
//       form.addEventListener('submit', function(event) {
//         if (form.checkValidity() === false) {
//           event.preventDefault();
//           event.stopPropagation();
//         }
//         form.classList.add('was-validated');
//       }, false);
//     });
//   }, false);
// })();

$(document).ready(function() {
  $("form#userInfo").submit(function(event) {
    const age = parseInt($("input#age").val());
    const sign = $("#sign").val();
    const commitment = $("input:radio[name=commitment]:checked").val();

    if (age) {
      if (age > 30) {
        $("#celebfinal").append("Brad Pitt");
      }
      if (age <= 30) {
        $("#celebfinal").append("Harry Styles");
      }
      $("#results").show();
      
    } else {
      alert('Please enter your age.');
    }
    
    event.preventDefault();
  });
});