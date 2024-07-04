const minimist = require("minimist")

 console.log(process.argv[2])
 process.argv.forEach((value, index)=>{
    console.log(`${index} : ${value}`)
 })
 const argNew = minimist(process.argv.slice(2))
 console.log(argNew.name)