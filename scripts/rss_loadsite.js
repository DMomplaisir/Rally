//this program will load each ting from database, and dynamically upload

var query = firebase.database().ref("news/"  ).orderByKey().limitToFirst(10);

query.once('value')
  .then(function(snapshot){
    snapshot.forEach(function(childSnapshot)
  {
    var div = document.createElement('div');
    childSnapshot.forEach(function(secondSnap){
      var text = document.createElement('p');
      var key = secondSnap.key;
      if (key == 'link_to'){
        var link_to = document.createElement('a');
        var childData = secondSnap.val();
        link_to.href = childData;
        link_to.innerHTML = "Zamn Ma";
        div.appendChild(link_to);
      }
      else {

        var childData = secondSnap.val();
        text.innerHTML = (childData);
        div.appendChild(text);

      }

      document.body.appendChild(div);
    });
    // var comment = document.createElement('div');
    // comment.className = "chips chips-placeholder";
    // div.appendChild(comment);
  });
});
