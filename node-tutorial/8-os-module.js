
// os (Operting system)
const os = require('os')

//info about current user
const user = os.userInfo()

//method returns the system uptime in seconds
const time = os.uptime()
console.log(`the system uptime is ${time} seconds`)

const currentoOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentoOS)