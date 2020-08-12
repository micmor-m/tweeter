$(document).ready(function() {
  // --- our code goes here ---
  console.log("Doc is ready")

//console log when click on button
$("#btn").on('click', function() {
  console.log(this); //The this keyword is a reference to the button
});

//console.log when press the key in the input field
//keydown to work properly
$("#tweet-text").on('keydown', function() {
  console.log(this.value); //The this keyword is a reference to the button
  console.log("tEXT LENGTH IS :", this.value.length)
  //let templateVars = {counter: this.value.length };
  //res.render("index.html", templateVars);
  $(".counter").text(140 - this.value.length);

    if ((140 - this.value.length) < 0) {
      console.log( $(".counter"))
      //if negative add a new class with color text red
      $(".counter").addClass("negativeNumber");
    } else {
      //in not remove the class and come back the black color
      $(".counter").removeClass("negativeNumber");
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




