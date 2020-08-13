/*
 * Client-side JS
 * jQuery is already loaded
 * Reminder: all DOM work in) jQuery's document ready function
 */

//Test code (temporary). Eventually will get this from the server.
// const data = [
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": "https://i.imgur.com/73hZDYK.png"
//       ,
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1261116232227
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": "https://i.imgur.com/nlhLi3I.png",
//       "handle": "@rd" },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1461113959088
//   }
// ]

const createTweetElement = function(data) {
  console.log("DATA IS INSIDE");
  console.log(data)

  let datetime = new Date(data.created_at);
  let today = Date.now();

  //(date2 - date1) / 1000 / 60 / 60 / 24
  let diffDays = Math.floor((today - datetime) /1000 / 60 / 60 / 24);
  console.log(diffDays);
  
  const tweet = `
  <article id="tweet" class="tweet_header"> 
    <div class = msm_top>
      <div id="name_user">
        <img src="${data.user.avatars}"> 
        <label  for="tweet-user">"${data.user.name}"</label>
      </div>
      <label for="tweet-sender">"${data.user.handle}"</label>
    </div>
    <textarea name="text" id="tweet-text">"${data.content.text}"</textarea>
    <div id="days">
      <p id="days_ago" type="submit">"${diffDays} days ago"</p>
      <div id="icons">
        <button id="btn1" type="submit"><img src="/images/flag.png"> </button>
        <button id="btn2" type="submit"><img src="/images/arrow.png"> </button>
        <button id="btn3" type="submit"><img src="/images/heart.png"></button>
      </div>        
    </div>
    </article>
    `
  return tweet;
}

const renderTweets = function(tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  for (let tweet of tweets) {
    let tweetToAdd = createTweetElement(tweet);
    console.log("Tweet to add ", tweetToAdd);
   $('#tweeter').append(tweetToAdd);
  }
}

// AJAX POST request that sends the form data to the server.
$(document).ready(function() {
  $( "#upload_tweeter" ).submit(function( event ) {
    //stop prevent default at the beginning always
    event.preventDefault();
    $( "#error-msg" ).hide();
    //always use .val with jQuery to get the value of the element if a number
    if (parseInt($("#counter").val()) === 140) {
      //always use .text with jQuery to get the value of the element if a text
      $( "#error-msg" ).text( "Your tweeter is empty!" );
      $( "#error-msg" ).slideDown();
      //$( "#error-msg" ).show();
      //}
      event.stopPropagation(); 
      return false;
    } else if (parseInt($("#counter").val()) < 0) {
      //make visible error message
      if ( $( "#error-msg" ).first().is( ":hidden" ) ) {
        $( "#error-msg" ).text( "Your tweeter is too long!" );
        $( "#error-msg" ).slideDown();
       //$( "#error-msg" ).show();
      }
      event.stopPropagation(); 
      return false;
    } else {
      console.log('Button clicked, performing ajax POST...');
      //Save some data to the server and notify the user once it's complete.
      str = $( "#upload_tweeter" ).serialize();
      $.ajax({
        method: "POST",
        url: "/tweets",
        //data: { name: "John", location: "Boston" }
        data: str
      })
      .done(function( data ) {
        loadTweets();
      })
    }
  })
});

const loadTweets = function() {
  //$(function() {
    //const $button = $('#load-more-posts');
    $(document).ready(function() {
      console.log('Page ready, getting all tweeter from serverx...');
      //$.ajax('more-posts.html', { method: 'GET' })
      $.ajax({
        method: "GET",
        url: "/tweets",
        //dataType: "script"
      })
      .then(function (moreTweets) {
        //remove all the tweets!!!!
        renderTweets(moreTweets);
         console.log('Success: ', moreTweets);
      //   $button.replaceWith(morePostsHtml);
      });
    });
  //});
};

// $(document).ready(function() {  
//   //within the document ready
//   $( ".navbar-brand" ).click(function() {
//     if ()
//     $("#counter").removeClass("hidden");
//   } else {
//     //in not remove the class and come back the black color
//     //$("#counter").removeClass("negativeNumber");
//     $("#counter").addClass("hidden");
//   })
//     //$( "#upload_tweeter" ).toggle();
 
// });


$(document).ready(function() {  
  //within the document ready
  loadTweets();
});

//To remember! all function dealing with $ means jquery to be inside a $(document).ready(function()
// $(document).ready(function() {  
//   renderTweets(data);
// });
