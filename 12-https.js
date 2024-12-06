const http = require("http")

// req is the incoming request
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("Welcome to our home page")
        res.end()  // Ensure response ends here after sending the home page content
    }
    else if (req.url === "/about") {
        res.write("Here is our short history")
        res.end()  // Ensure response ends here after sending the about page content
    }
    else {
        res.write(`
            <h1>Ops!</h1>
            <p>We can't find the page you're looking for</p>
            <a href="/">Back home</a>
        `)
        res.end()  // End response after sending error content
    }
})

server.listen(5000)
