/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//Test / driver code (temporary). Eventually will get this from the server.
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1261116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]




 const createTweetElement = function(data) {
  console.log("DATA IS INSIDE");
  console.log(data)

  let datetime = new Date(data.created_at);
  let today = Date.now();

  //(date2 - date1) / 1000 / 60 / 60 / 24
  let diffDays = Math.floor((today - datetime) /1000 / 60 / 60 / 24);
  console.log(diffDays);
  
//const item = `
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
   //$('#tweet').append(tweetToAdd);
  }
}


//const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
//console.log($tweet); // to see what it looks like
//$('.container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

//const $tweet_header = $(`<article class="tweet_header">Hello world</article>`);

$(document).ready(function() {
  
renderTweets(data);

});