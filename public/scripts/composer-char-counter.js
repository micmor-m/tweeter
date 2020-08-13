//all event to be done inside this event handler because we need to wait the page is fully loaded
//before request any information in it, otherwise will get an error
$(document).ready(function() {

  //keydown to work properly
  $("#tweet-text").on('keydown', function() {
    $("#counter").text(140 - this.value.length);

    if ((140 - this.value.length) < 0) {
      
      //if negative add a new class with color text red
      $("#counter").addClass("negativeNumber");
    } else {
      //in not remove the class and come back the black color
      $("#counter").removeClass("negativeNumber");
    }
  });
});
