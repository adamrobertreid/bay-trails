console.log('custom materialize there');

$(document).ready(function() {

// landing page header
$('.parallax').parallax();


// Initialize collapse button
$(".button-collapse").sideNav();

// Initialize modal on trail submit page
$('.modal-trigger').leanModal();

// selections for search bar results
$('select').material_select('destroy');

  //
  // function MainController() {
  //   var vm = this;
  //   console.log('hi im main material controller');
  //   vm.select = {
  //       value: "Option1",
  //       choices: ["Option1", "I'm an option", "This is materialize", "No, this is Patrick."]
  //   };

// }
});
