function replaceWhiteSpaceWithUnderscore(str) {
    return str.replace(/\s/, "_");
}

function convertToHashTag(str) {
    return str.replace(/\s/, "");
}

function addTwitterButtonHTML(textToTweet, hashtags) {
    return '<a class="btn-social-icon btn-twitter right-align-text col-xs-offset-2"' +
        'href="https://twitter.com/intent/tweet/?text=' + encodeURIComponent(textToTweet) +
        '&hashtags=' + convertToHashTag(hashtags) + '">' +
        '<span class="fa fa-twitter"></span></a>';
}

function parseQuote(response) {
    document.getElementById("quote").innerHTML = '"' + response.quoteText + '"' +
        addTwitterButtonHTML(response.quoteText, response.quoteAuthor);
    if (response.quoteAuthor !== "") {
        document.getElementById("author").innerHTML = " " + response.quoteAuthor;
        document.getElementById("authorLink").href = "http://www.wikipedia.com/wiki/" + replaceWhiteSpaceWithUnderscore(response.quoteAuthor);
    } else {
        document.getElementById("author").innerHTML = "Unkown";
    }
}

function appendExternalScriptToHead(srcURL) {
    $('script[src="' + srcURL + '"]').remove();
    $('<script>').attr('src', srcURL).appendTo('head');
}

function getNewQuote() {
    var quoteSource = "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=parseQuote";
    appendExternalScriptToHead(quoteSource);
}