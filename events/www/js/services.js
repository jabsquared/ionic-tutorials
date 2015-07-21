app.factory('event_data', function() {
  console.log('in service!');
    var events = [
      {
        id        : 1,
        name      : "Jay-Z Performance",
        type      : "music",
        start     : new Date(2015, 6, 21, 2, 50),
        dur       : 30, // in minutes
        desc      : "Jay-Z performs hits from his newest album Purple Fish. Testing test test. Testing test test. Testing test test.",
        type      : "music"
      },
      {
        id        : 2,
        name      : "What is the meaning of life?",
        type      : "speech",
        start     : new Date(2015, 6, 21, 2, 20),
        dur       : 50, // in minutes
        desc      : "Bogdan Talks About Life.",
        type      : "talk"
      },
      {
        id        : 3,
        name      : "Louis & Friends",
        type      : "music",
        start     : new Date(2015, 6, 21, 9, 30),
        dur       : 20, // in minutes
        desc      : "Louis and the Amigos",
        type      : "music"
      }
    ]
    return {
      all: function() {
        return events;
      },
      remove: function(events) {
        events.splice(events.indexOf(event), 1);
      },
      get: function(id) {
        for (var i = 0; i < events.length; i++) {
          if (events[i].id === parseInt(id)) {
            return events[i];
          }
        }
        return null;
      }
    };
 });
