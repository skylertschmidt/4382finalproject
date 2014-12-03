var express = require("express"),
app = express(),
bodyParser = require("body-parser"),
cookieParser = require("cookie-parser"),
expressSession = require("express-session"),
mongoStore = require("connect-mongo")({session: expressSession}), //mongoStore

mongoose = require("mongoose");

require("./models/user_model.js");
//var port = process.env.PORT;
//var host = process.env.IP;
var port = "27017";
var host = "127.0.0.1";

mongoose.connect("mongodb://" + host +":" + port)


app.engine('.html',require("ejs").__express);

app.set('views', __dirname + '/views');

app.set('view engine', 'html');

app.use(bodyParser());

app.use(cookieParser());

app.use(expressSession({
    secret: 'SECRET',
    cookie: {maxAge: 60*60*1000},
    store: mongoStore({
        db: mongoose.connection.db,
        collection: 'session'
    })
}));

require("./models/comments_model.js");
require("./models/page_model.js");
require("./models/photo_model.js");




require("./routes")(app);
app.listen(8080);
console.log("running server");