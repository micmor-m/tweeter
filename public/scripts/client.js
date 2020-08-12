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




//To remember! all function dealing with $ means jquery to be inside a $(document).ready(function()
$(document).ready(function() {  
  renderTweets(data);
});

// AJAX POST request that sends the form data to the server.
$(document).ready(function() {
  
  $( "#upload_tweeter" ).submit(function( event ) {
    console.log('Button clicked, performing ajax call...');
    //alert( "Handler for .submit() called." );
    event.preventDefault();
    //Save some data to the server and notify the user once it's complete.
    str = $( "#upload_tweeter" ).serialize();
    $.ajax({
      method: "POST",
      url: "/tweets",
      //data: { name: "John", location: "Boston" }
      data: str
    })
    .done(function( msg ) {
      alert( "Data Saved: " + msg );
      console.log( str );
    })
  })
});


$(document).ready(function() {  
  //within the document ready
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
          renderTweets(moreTweets);
           console.log('Success: ', moreTweets);
        //   $button.replaceWith(morePostsHtml);
        });
      });
    //});
  };
  loadTweets();
});

