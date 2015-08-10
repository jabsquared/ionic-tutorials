
app.service('userData', function () {
        var user = {
            uid:          '',
            full_name:    '',
            email:        '',
            profile_img:  ''
        }

        return {
            getUser: function () {
                return user;
            },
            setUser: function(data) {
                user.uid          = data.uid;
                user.full_name    = data.name;
                user.email        = data.email;
                user.profile_img  = data.profile_img  || '';
            }
        };
});

app.service('appointmentData', function () {
        var calendar = [
          {
          date: new Date(2015, 07, 10),
          slots: [{
            start: '9:00 am',
            end: '9:45 am',
            client: 'Bogdan',
            barder: 'Gabino',
            taken: true
          }, {
            start: '9:45 am',
            end: '10:30 am',
            client: '',
            barder: '',
            taken: false
          }, {
            start: '10:30 am',
            end: '11:15 am',
            client: 'Brain',
            barder: 'Antonio',
            taken: true
          }, {
            start: '11:15 am',
            end: '12:00 pm',
            client: 'Jim',
            barder: 'Gabino',
            taken: true
          }, {
            start: '12:00 pm',
            end: '12:45 pm',
            client: '',
            barder: '',
            taken: false
          }, {
            start: '12:45 pm',
            end: '1:30 pm',
            client: 'Louis',
            barder: 'Matt',
            taken: true
          }, {
            start: '1:30 pm',
            end: '2:15 pm',
            client: 'Louis',
            barder: 'Matt',
            taken: true
          }, {
            start: '2:15 pm',
            end: '3:00 pm',
            client: 'Louis',
            barder: 'Matt',
            taken: false
          }, {
            start: '3:00 pm',
            end: '3:45 pm',
            client: 'Louis',
            barder: 'Matt',
            taken: true
          }, {
            start: '3:45 pm',
            end: '4:30 pm',
            client: 'Louis',
            barder: 'Matt',
            taken: false
          }, {
            start: '4:30 pm',
            end: '5:15 pm',
            client: 'Louis',
            barder: 'Matt',
            taken: false
          }, {
            start: '5:15 pm',
            end: '6:00 pm',
            client: 'Louis',
            barder: 'Matt',
            taken: false
          }, {
            start: '6:00 pm',
            end: '6:45 pm',
            client: 'Louis',
            barder: 'Matt',
            taken: false
          }, {
            start: '6:45 pm',
            end: '7:30 pm',
            client: 'Louis',
            barder: 'Matt',
            taken: true
          }]
        }
      ]

        return {
            getApts: function (c_date) {
              // console.log("fetching slots!");
              // console.log("Param Date: " + c_date);
              var i;
                for (i = 0; i < calendar.length; i++){
                  console.log("Array Date: " + calendar[i].date);
                  if (calendar[i].date.toString() === c_date.toString()){
                    // console.log('Slots:');
                    // console.log(calendar[i].slots);
                    return calendar[i].slots;
                  }
                  return null;
                }
            },
            setApt: function(apt) {
                apt.taken = true;
            }
        };
});
