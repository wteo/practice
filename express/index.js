const express = require("express");
const path = require("path"); // to access built-in node.JS path() method 
const app = express();
const port = 3000;


// You can acccess your html files this way. Though, this is not the most ideal way as you'll need to manually call for every file.
//app.get('/register', (req, res) => {
//    res.sendFile(path.join(__dirname, "public", "index.html")); 
//})

// Much easier way to use app.use() and call on a built-in middleware.
// A middleware func is a func that has access to the req and res object.
// Express has built-in middleware funcs. (as well as accepting 3rd party packages and custom middleware
// One such example is express.static(), which is particularly handy when serving static files.
// In this way, you can also include as many HTML pages as you want within the same folder.
app.use("/register", express.static("public"));
// Where you don't specify the path, the default URL will be "/".
//app.use(express.static("public")); // Files will load in the main page, not "/register" sub-page.

// To update page when data is sent to the server.
app.post("/register", (req, res) => {
    res.send("Registered");
})

// To access to API members
const members = require("./Members"); // Because it's a modile., the Members.js title file starts with a big capital
app.get("/api/members", (req, res) => res.json(members));

app.get("/api/members/:i", (req, res) => {
    res.json(req.params.id);
})

// If your HTTP req methods share the same path, you can chain them via app.route();
app.route("/contact")
.get((req, res) => {
    res.send(`
    <h1></h1>
    <form method="post">
        <label>Name</label>
        <input name="name" />
        <br/>
        <label>Message</label>
        <input name="message"/>
        <br/>
        <button type="submit">Submit</button>
    </form>
    `)
})
.post((req, res) => {
    res.send("Thanks for contacting us!");
});


// To create a localHost port
app.listen(port, () => {
    console.log(`Listening to ${port}`);
});