export const Tweet = (quote,author) => {
    let tweetButton = document.getElementById("tweet-quote");
    tweetButton.getAttribute("href");
    tweetButton.setAttribute("href",'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
    encodeURIComponent('"' + quote + '" ' + author))
}