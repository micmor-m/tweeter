# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

It has been done to practice HTML, CSS, JS, jQuery and AJAX front-end skills, and Node, Express and MongoDB back-end skills.

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- body-parser
- chance
- md5

## Documentation

### Display

- A fixed navigation bar on he top with the logo and a compose button.

- A compose Tweet box containsa form for submitting tweets with incorporated a character counter.

- A list of Tweets in reverse-chronological order.
Each Tweet have contains the user's avatar, name, handle, body, which contains the tweet text and have a footer, which displays:
how long ago the tweet was created, on the left
"Flag", "Re-tweet" and "Like" icons upon hovering over the tweet, on the right

### Behaviour

- When a user types into the Compose Tweet textarea, the Character Counter is updated to show how many characters a user may still type (subtracting the number of characters they've typed from the maximum allowable character count of 140).

- The Character Counter turns red (or similar) when more than 140 characters have been typed into the Compose Tweet text area, and it shows how many characters over the 140 limit have been typed (using a negative number).

- When a user submits an invalid tweet (the tweet textarea is empty or contains more than 140 characters), an appropriate error message is displayed.

- When a user submits a valid tweet, the list of tweets is refreshed (displaying the new tweet), the Compose Tweet textarea is cleared, and the Character Counter is reset (to 140)

- The page include responsive design techniques to work well at various screen sizes.

## Final Product

!["Screenshot page - "](URL)
!["Screenshot page - "](URL)
!["Screenshot page - "](URL)