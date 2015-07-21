app.factory('event_data', function() {
  console.log('in service!');
    var events = [
      {
        name      : "Event 1",
        type      : "music",
        start     : 7,
        dur       : 30, // in minutes
        desc      : "Musical event",
      },
      {
        name      : "Event 2",
        type      : "speech",
        start     : 2,
        dur       : 60, // in minutes
        desc      : "Speaker",
      },
      {
        name      : "Event 3",
        type      : "music",
        start     : 6,
        dur       : 20, // in minutes
        desc      : "Louis and the Amigos",
      }
    ]
    return events;
 });
