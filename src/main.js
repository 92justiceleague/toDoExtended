let express = require("express");
let app = express();
app.use(express.static("public"))
let PORT = 3030;
app.use(express.json());

let roues = require("./routes.js/toDoroutes")

app.use(routes);













app.listen(PORT, function(){
    console.log("Application start on port", PORT);
})