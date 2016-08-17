function writeUserData(eventname, date, location, description, filename) {
    firebase.database().ref('events/').push({
        eventname: eventname,
        date: date,
        location: location,
        describe: description,
        file: filename
    });
};



function passUserData() {
    var eventname = $("#event_name").val();
    var date = $("#date").val();
    var location = $("#location").val();
    var description = $("#icon_prefix2").val();
    var file = $("#file").val();


    writeUserData(eventname, date, location, description, file);


};

$(function() {
    $('#submit').click(function() {
        passUserData();
    });
});
