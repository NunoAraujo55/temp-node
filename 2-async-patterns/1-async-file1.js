const { readFile } = require("fs")

const getText = (path) => {
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
}

getText("../content/first.txt.")
    .then(result => console.log(result))
    .catch((err) => console.log(err))




