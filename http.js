http = require('http')


// http.get(process.argv[2], function(res) {
//   console.log(res)
// }).on('error', function(e) {
//   console.log("got error: " + e.message)
// }).on('data', function(e) {
//   console.log("got data!: ", data)
// })

http.get(process.argv[2], function(res) {
  res.on("data", function(data) {
    console.log(data.toString())
  })
  res.on("error", function(error) {
    console.log(error)
  })
})

// official:
//     var http = require('http')

//     http.get(process.argv[2], function (response) {
//       response.setEncoding('utf8')
//       response.on('data', console.log)
//       response.on('error', console.error)
//     })