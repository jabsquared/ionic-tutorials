app.service('OAuth', function($q) {
    return {
        loginUser: function(phone, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;

            if (phone == 'user' && pw == 'secret') {
                deferred.resolve('Welcome ' + name + '!');
            } else {
                deferred.reject('Wrong credentials.');
            }
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})
