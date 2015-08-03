app.factory('aptListener', function($rootScope) {

    localAptDB.changes({
        continuous: true,
        onChange: function(change) {
            if (!change.deleted) {
                $rootScope.$apply(function() {
                    localAptDB.get(change.id, function(err, doc) {
                        $rootScope.$apply(function() {
                            if (err) console.log(err);
                            $rootScope.$broadcast('add', doc);
                        })
                    });
                })
            } else {
                $rootScope.$apply(function() {
                    $rootScope.$broadcast('delete', change.id);
                });
            }
        }
    });
    return true;
});

app.factory('barberListener', function($rootScope) {

    localBarberDB.changes({
        continuous: true,
        onChange: function(change) {
            if (!change.deleted) {
                $rootScope.$apply(function() {
                    localBarberDB.get(change.id, function(err, doc) {
                        $rootScope.$apply(function() {
                            if (err) console.log(err);
                            $rootScope.$broadcast('add', doc);
                        })
                    });
                })
            } else {
                $rootScope.$apply(function() {
                    $rootScope.$broadcast('delete', change.id);
                });
            }
        }
    });
    return true;
});

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
                user.email        = data.email        || '';
                user.profile_img  = data.profile_img  || '';
            }
        };
});
