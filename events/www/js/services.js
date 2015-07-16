app.factory('event_data', function() {
  console.log('in service!');
    var events = [
      {
        name: "event 1"
      },
      {
        name: "event 2"
      },
      {
        name: "event 3"
      }
    ]
    return events;
 });
