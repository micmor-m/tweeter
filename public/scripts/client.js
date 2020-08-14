/*
 * Client-side JS
 * jQuery is already loaded
 * Reminder: all DOM work in) jQuery's document ready function
 */

const createTweetElement = function(data) {
  //get date created from data and calculate how many days ago
  let datetime = new Date(data.created_at);
  let today = Date.now();

  //(date2 - date1) / 1000 / 60 / 60 / 24
  let diffDays = Math.floor((today - datetime) / 1000 / 60 / 60 / 24);
  
  //tamplete for dynamic HTML
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
      <div id="icons" class="seeicons">
      <button id="btn1" type="submit"><img src="/images/flag.png"> </button>
      <button id="btn2" type="submit"><img src="/images/arrow.png"> </button>
      <button id="btn3" type="submit"><img src="/images/heart.png"></button>
    </div>        
  </div>
  </article>
  `;
  return tweet;
};

//helper function to loop through all object of the array in reverse order
//takes return value and appends it to the tweets container
const renderTweets = function(tweets) {
  for (let i =  tweets.length - 1; i >= 0; i--) {
    let tweetToAdd = createTweetElement(tweets[i]);
    $('#tweeter').append(tweetToAdd);
  }
};

// AJAX POST request that sends the form data to the server.
$(document).ready(function() {
  $( "#upload_tweeter" ).submit(function( event ) {
    //stop preventDefault at the beginning always
    event.preventDefault();

    $( "#error-msg" ).hide();

    //INPUT VALIDATION
    //always use .val with jQuery to get the value of the element if a number
    if (parseInt($("#counter").val()) === 140) {
      //always use .text with jQuery to get the value of the element if a text
      $( "#error-msg" ).text( "Your tweeter is empty!" );
      $( "#error-msg" ).slideDown();
      event.stopPropagation();
      return false;

    } else if (parseInt($("#counter").val()) < 0) {
      //make visible error message
      if ( $( "#error-msg" ).first().is( ":hidden" ) ) {
        $( "#error-msg" ).text( "Your tweeter is too long!" );
        $( "#error-msg" ).slideDown();
      }
      event.stopPropagation();
      return false;

    } else {
      //Save data to the server
      let str = $( "#upload_tweeter" ).serialize();
      $.ajax({
        method: "POST",
        url: "/tweets",
        data: str
      })
      
        .done(function() {
          //remove all tweeers by reloading the page without GET them from the server
          location.reload(true);
        
          //then reload all of them
          loadTweets();
        });
    }
  })
});

//GET /tweets request to the server
const loadTweets = function() {
  $(document).ready(function() {
    $.ajax({
      method: "GET",
      url: "/tweets",
    })
      .then(function (moreTweets) {
        //render them again
        renderTweets(moreTweets);
      });
  });
};

//when docment ready ask the server for all existing tweets
$(document).ready(function() {
  loadTweets();
});
