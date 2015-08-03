
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
