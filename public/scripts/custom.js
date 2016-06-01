console.log('custom materialize there');

$(document).ready(function() {

// landing page header
$('.parallax').parallax();


// Initialize collapse button
$(".button-collapse").sideNav();


$('.modal-trigger').leanModal();
    // selections for search bar results
$('select').material_select('destroy');

});
