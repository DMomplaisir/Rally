//this program will load each ting from database, and dynamically upload


var query = firebase.database().ref("news/").orderByKey().limitToLast(35);
counter = 0;
query.once('value')
    .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var container = document.getElementById("contain");
            var div = document.createElement('div');
            div.className = ("card teal darken-1");
            var card_content = document.createElement('div');
            var link_to = document.createElement('a');
            card_content.className = "card-content white-text";
            counter++;
            childSnapshot.forEach(function(secondSnap) {
                var text = document.createElement('p');
                var key = secondSnap.key;
                if (key == 'link_to') {
                    var childData = secondSnap.val();
                    link_to.href = childData;

                } else if (key == "name") {
                    var name = document.createElement('span');
                    name.className = "card-title";
                    var nameData = secondSnap.val();
                    name.innerHTML = nameData;
                    link_to.appendChild(name);
                    link_to.className = "white-text";
                    card_content.appendChild(link_to);
                } else {

                    var childData = secondSnap.val();
                    text.innerHTML = (childData);
                    card_content.appendChild(text);

                }

                if (counter > 11) {
                  div.className = "card teal darken-1 blind";
                }

                div.appendChild(card_content);
                container.appendChild(div);
            });
            // var comment = document.createElement('div');
            // comment.className = "chips chips-placeholder";
            // div.appendChild(comment);
        });
    });
