//rss forms
news_sources = [
  ["the Real News", 'http://therealnews.com/rss/therealnews.rss'],
  ["NPR News - Race and Culture", 'http://www.npr.org/rss/rss.php?id=173754155'],
  ["NPR News", 'http://www.npr.org/rss/rss.php?id=1001'],
  ["Open Democracy",
  'https://www.opendemocracy.net/xml/rss/home/index.xml']
  ["The Nation - Civil Unrest",
  'https://www.thenation.com/feed/?post_type=article&subject=civil-unrest']
  ["The Nation - Society", 'https://www.thenation.com/feed/?post_type=article&subject=society']
  [];
]
var new_source = 'http://www.theatlantic.com/feed/best-of/';

//creates unique id
function uniqueID() {
    return 'id-' + Math.random().toString(36).substr(2, 16);
};

var today = new Date().getHours();
//get time
if (today == 9 || today == 23) {
    updateNews();
}


function updateNews() {
    feednami.loadGoogleFormat(new_source, function(result) {
        if (result.error) {
            console.log(result.error)
        } else {
            var entries = result.feed.entries
            for (var i = 0; i < entries.length; i++) {
                var entry = entries[i]
                guid = uniqueID(),
                    title = entry.title,
                    snippet = entry.contentSnippet,
                    link = entry.link

                firebase.database().ref('news/' + guid).set({
                    name: title,
                    snip: snippet,
                    link_to: link
                })

                console.log(title)
                console.log(entry.contentSnippet)
                console.log(entry.link)
                console.log(guid)
            }

        }
    })
}

// function sendArticle(guid, title,snippet,link){}{
//   firebase.database().ref('news/' + guid ).set({
//     title: title,
//     snippet: snippet,
//     link : link
//   });
// }
