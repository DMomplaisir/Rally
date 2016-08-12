//this program will load each ting from database, and dynamically upload

var query = firebase.database().ref("news/"  ).orderByKey().limitToFirst(10);

query.once('value')
  .then(function(snapshot){
    snapshot.forEach(function(childSnapshot)
  {
    var container = document.getElementById("contain");
    var div = document.createElement('div');
    div.className = ("card teal darken-1");
    var card_content = document.createElement('div');
    card_content.className = "card-content white-text";

    childSnapshot.forEach(function(secondSnap){
      var text = document.createElement('p');
      var key = secondSnap.key;
      if (key == 'link_to'){
        var link_to = document.createElement('a');
        var childData = secondSnap.val();
        link_to.href = childData;
        link_to.innerHTML = "Zamn Ma";
        card_content.appendChild(link_to);
      }
      else if (key == "name") {
        var name = document.createElement('span');
        name.className = "card-title";
        var nameData = secondSnap.val();
        name.innerHTML = nameData;
        card_content.appendChild(name);
        }
      else {

        var childData = secondSnap.val();
        text.innerHTML = (childData);
        card_content.appendChild(text);

      }
      div.appendChild(card_content);
      container.appendChild(div);
    });
    // var comment = document.createElement('div');
    // comment.className = "chips chips-placeholder";
    // div.appendChild(comment);
  });
});
