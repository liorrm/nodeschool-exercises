var fs = require('fs')
async = require('async')

module.exports = function(pathToDirectory, extension, callback) {

  var fileList = []

  fs.readdir(pathToDirectory, function saveResults(err, data) {
    if (err) { return callback(err) }

    for (var i=0; i<data.length; i++) {

      if (data[i].indexOf("." + extension) != -1) {
        fileList.push(data[i])
      }
    }
    return callback(err = null, fileList)
  })

}