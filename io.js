var fs = require('fs')

var file = fs.readFileSync(process.argv[2])

file = file.toString().split('\n')

// console.log(file)

// console.log(file instanceof Array)

newLines = 0

for (var i=0; i<file.length; i++) {
    newLines += 1
}

newLines -= 1

console.log(newLines)

