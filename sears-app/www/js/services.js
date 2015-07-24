app.factory('ticket_data', function() {
  console.log('in service!');
    var tickets = [
      {
        id        : 1,
        text      : 'ticket 1'
      },
      {
        id        : 2,
        text      : 'ticket 2'
      },
      {
        id        : 3,
        text      : 'ticket 3'
      }
    ]
    return {
      all: function() {
        return tickets;
      },
      remove: function(events) {
        tickets.splice(events.indexOf(ticket), 1);
      },
      get: function(id) {
        for (var i = 0; i < tickets.length; i++) {
          if (tickets[i].id === parseInt(id)) {
            return tickets[i];
          }
        }
        return null;
      }
    };
 });
