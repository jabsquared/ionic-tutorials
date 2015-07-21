app.factory('event_data', function() {
  console.log('in service!');
    var events = [
      {
        name      : "Jay-Z Performance",
        type      : "music",
        start     : '9 am',
        dur       : 30, // in minutes
        desc      : "Jay-Z performs hits from his newest album... Purple Fish.",
        type      : "music"
      },
      {
        name      : "What is the meaning of life?",
        type      : "speech",
        start     : '11 am',
        dur       : 60, // in minutes
        desc      : "Bogdan Talks About Life.",
        type      : "talk"
      },
      {
        name      : "Louis & Friends",
        type      : "music",
        start     : '2 pm',
        dur       : 20, // in minutes
        desc      : "Louis and the Amigos",
        type      : "music"
      }
    ]
    return events;
 });
