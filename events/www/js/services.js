app.factory('event_data', function() {
  console.log('in service!');
    var events = [
      {
        name      : "Event 1",
        type      : "music",
        start     : 7,
        dur       : 60, // in minutes
        desc      : "Musical event",

      },
    ]
    return events;
 });
