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

// Get Single Member
app.get("/api/members/:id", (req,res) => {
    const found = members.some(member => member.id === req.params.id)
    if(found) {
        res.json(members.filter(member => member.id === req.params.id));
    } else {
        res.status(400).json({message: `No member with the id of ${req.params.id}`});
    }
});

// How to create a custom middleware
const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get("host")}${req.originalUrl}`);
    next(); // You call next() last so you can move to the next stack.
};
// To initialize your middleware
app.use(logger);

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

// How to create/update/delete object
// 1. To create/update/delete object, use the "post", "put" and "delete" verbs respectively. 
// i.e check the examples in the pokemon/api/pokemon.js file
// 2. To get data from res.body, you need to parse. Express has some built-in middlewares to help do this.
// Note: The middleware parsing needs to be placed before the initialization of the HTTP verbs.
// Examples
app.use(express.json()); // this allows you to handle raw json
app.use(express.urlencoded({extended: false})); // this allow to handle forms

// How to create Routers
// 1. First create a seperate folder where you want to save your data.
// Example pokemon.js the pokemon/api folder
// 2. in the JS file, call on the express.Router() method
//      const express = require("express");
//      const router = express.Router();
// 3. In the same file, call on the verb methods
// Basic syntax
//      router.get("/", (req, res) => {
//          res.send("_____")    
//      });
// 4. Then, remember to export the router via "module.exports = router"
// 5. In the root file, use app.use() to call on the router
// Basic syntax
//      app.use(path, router);
// Example Below
const pokemon = require("./pokemon/api/pokemon.js")
app.use("/pokemon/api/pokemon", pokemon);

// How to update new object

// How to delete new object

// To create a localHost port
app.listen(port, () => {
    console.log(`Listening to ${port}`);
});