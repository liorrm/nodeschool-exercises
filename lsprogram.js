var mymodule = require('./lsmodule.js')

mymodule(process.argv[2], process.argv[3], function(err, data) {
  if (err) { return 'error' }

  for (var i=0; i<data.length; i++) {
    console.log(data[i])
  }
})

