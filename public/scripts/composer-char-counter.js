//all event to be done inside this event handler because we need to wait the page is fully loaded
//before request any information in it, otherwise will get an error
$(document).ready(function() {

  //keyup to update the counter in case the user paste some text with CTRL + V
  $("#tweet-text").on('keyup', (function() {
    $("#counter").text(140 - this.value.length);

    if ((140 - this.value.length) < 0) {
      
      //if negative add a new class with color text red
      $("#counter").addClass("negativeNumber");
    } else {
      //in not remove the class and come back the black color
      $("#counter").removeClass("negativeNumber");
    }
  }));

  //keydown to update the counter in case the user press and hold down a key
  $("#tweet-text").on('keydown', (function() {
    $("#counter").text(140 - this.value.length);

    if ((140 - this.value.length) < 0) {
      
      //if negative add a new class with color text red
      $("#counter").addClass("negativeNumber");
    } else {
      //in not remove the class and come back the black color
      $("#counter").removeClass("negativeNumber");
    }
  }));

  //prevent use of right clic of the mouse to avoid to copy any text
  $("#tweet-text").on("contextmenu",function(e){
    return false;
  });

});



