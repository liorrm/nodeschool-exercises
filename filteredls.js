var fs = require('fs')

var filteredLs = function(pathToDirectory, extension) {
  fs.readdir(pathToDirectory, function logResults(err, data) {
    for (var i=0; i<data.length; i++) {
      if (data[i].indexOf("." + extension) != -1) {
        console.log(data[i])
      }
    }
  })
}

filteredLs(process.argv[2], process.argv[3])

// official solution:

// var fs = require('fs')
// var path = require('path')

// fs.readdir(process.argv[2], function (err, list) {
//   list.forEach(function (file) {
//     if (path.extname(file) === '.' + process.argv[3])
//       console.log(file)
//   })
// })

