//we have 3 ways of making promises
//1 - require("fs").promises and use the readFile, WriteFile
//2 - using the readFilePromise from the util
//or creating a promise, the code is commented in the end 

const { readFile, writeFile} = require("fs").promises


/* const util = require("util")
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile) */


const start = async() => {
    try{
        const first = await readFile("./content/first.txt", "utf8")
        const second = await readFile("./content/second.txt", "utf8")
        await writeFile(
            "./content/result-mind-grenade.txt",
            `this is awesome: ${first}, ${second}`,
            { flag: 'a' }
        )
        console.log(first, second)
    }catch(err){
        console.log(err)
    }
    
}

start() 


// 3 method

/* getText("./content/first.txt")
.then(result => console.log(result))
.catch((err) => console.log(err)) */

/* const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, "utf8", (err, data) => {
            if (err) {
                console.log(err)
                reject
            } else {
                resolve(data)
            }
        })
    })
} */