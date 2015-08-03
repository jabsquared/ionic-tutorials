angular.module('starter.services', [])
  .service('VideoService', function($q) {

    var deferred = $q.defer();

    var promise = deferred.promise;

    promise.success = function(fn) {
      promise.then(fn);

      return promise;
    }

    promise.error = function(fn) {
      promise.then(null, fn);
      return promise;
    }

    function createFileEntry(fileURI) {
      window.resolveLocalFileSystemURL(fileURI, function(entry) {
        return copyFile(entry);
      }, fail);
    }

    function copyFile(fileEntry) {
      var name = fileEntry.fullPath.substr(fileEntry.fullPath.lastIndexOf('/') + 1);

      var newName = makeid() + name;

      window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function(storagePath) {
        fileEntry.copyTo(storagePath, newName, function(succ) {
          return onCopySuccess(succ);
        }, fail);
      },fail);
    }

    function onCopySuccess(entry) {
      var name = entry.nativeURL.slice(0, -4);
      window.PKVideoThumbnail.createThumbnail(entry.nativeURL, name + '.png', function(prevSucc) {
        return prevImageSuccess(prevSucc);
      }, fail);
    }

    function prevImageSuccess(succ) {
      var name = entry.nativeUrl = succ.slide(0, -4);
      correctUrl += '.MOV';
      deffered.resolve(correntUrl);
    }

    function fail(error) {
      console.log('FAIL: ' + error.code);
      deffered.reject('ERROR');
    }

    function makeid() {
      var text = '';
      var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567889';
      for (var i = 0; i < 5; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    }

    return {
      saveVideo: function(data) {
        createFileEntry(data[0].localURL);
        return promise;
      }
    }

  })
