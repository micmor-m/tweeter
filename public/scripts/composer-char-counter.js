//all event to be done inside this event handler because we need to wait the page is fully loaded
//before request any information in it, otherwise will get an error
$(document).ready(function() {
  
  console.log("Doc is ready");

  //console log when click on button
  $("#btn").on('click', function() {
    //evt.preventDefault();
    //The this keyword is a reference to the button
    console.log(this);
  });

  //console.log when press the key in the input field
  //keydown to work properly
  $("#tweet-text").on('keydown', function() {
    //evt.preventDefault();
    console.log(this.value);
    console.log("tEXT LENGTH IS :", this.value.length);
  
    $("#counter").text(140 - this.value.length);

    if ((140 - this.value.length) < 0) {
      console.log( $("#counter"))
      //if negative add a new class with color text red
      $("#counter").addClass("negativeNumber");
    } else {
      //in not remove the class and come back the black color
      $("#counter").removeClass("negativeNumber");
    }
  });

//This is a right way to do it in JS but it can be done 
//more simply directly in css file
//see new-tweet.css file
// $("article.tweet_header").mouseenter( function() {
//  console.log("Iam over the box");
//  $("article.tweet_header").addClass("shadow");
//  $("article.tweet_header").mouseleave( function() {
//   console.log("Iam out the box");
//   $("article.tweet_header").removeClass("shadow");
//  });
// });


});




