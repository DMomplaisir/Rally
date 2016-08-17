//rss feed from different sites
var news_sources = [
    ["the Real News", 'http://therealnews.com/rss/therealnews.rss'],
    ["NPR News - Race and Culture", 'http://www.npr.org/rss/rss.php?id=173754155'],
    ["NPR News", 'http://www.npr.org/rss/rss.php?id=1001'],
    ["Open Democracy", 'https://www.opendemocracy.net/xml/rss/home/index.xml'],
    ["The Nation - Civil Unrest", 'https://www.thenation.com/feed/?post_type=article&subject=civil-unrest'],
    ["The Nation - Society", 'https://www.thenation.com/feed/?post_type=article&subject=society'],
    ['The Atlantic', 'http://theatlantic.com/feed/best-of/']
];

var guid_list = [1,];
//maybe put full article into database depends on how we want to do this


//creates unique id
function uniqueID() {
    return 'id-' + Math.random().toString(36).substr(2, 16);
};
var time = new Date();
var hours = time.getHours();

if  (hours < 1) {

    for (var i = 0; i < news_sources.length; i++) {
      var news_source = news_sources[i];
      console.log(news_source);
      var news_link = news_source[1];
      console.log(news_link);
      var new_name = news_source[0];
      updateNews(news_link, new_name);
      console.log(guid_list);
    }
}
else {
  console.log("Good didn't load a new site");
}

    // make for loop put all guid into database, acsess numbers

// }

// update database with the info
function updateDatabase(guid, title, snippet, link, news_name) {
    firebase.database().ref('news/' + title).set({
        name: title,
        snip: snippet,
        link_to: link
    });
};


//
function updateNews(news, new_name) {
    feednami.loadGoogleFormat(news, function(result) {
        if (result.error) {
            console.log(result.error);
        } else {
            var entries = result.feed.entries;
            for (var i = 0; i < entries.length; i++){
                var entry = entries[i];
                guid = uniqueID();
                title = entry.title;
                snippet = entry.contentSnippet;
                link = entry.link;
                time_article = entry.publishedDate;
                guid_list.push(guid);
                updateDatabase(guid, title, snippet, link, new_name);
            }

        }
    })
}



// function cleanupDatabase() {
//   var undefinednews = new Firebase('https://rally-37ee6.firebaseio.com/news/undefined');
//   undefinednews.set(null);
//   feednami.loadGoogleFormat(url, function(result)){
//     if (result.error){
//       console.log(result.error)
//     }
//     else{
//       var entries = result.feed.entries
//       for (var i = 0; i < entries.length; i++) {
//         entry = entries[i]
//         title = entry.title
//         if (title) ==
//
//       }
//     }
//   }
//
// }
//
// cleanupDatabase();
// function sendArticle(guid, title,snippet,link){}{
//   firebase.database().ref('news/' + guid ).set({
//     title: title,
//     snippet: snippet,
//     link : link
//   });
// }
