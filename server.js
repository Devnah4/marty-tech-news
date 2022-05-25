const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });
const sequelize = require("./config/connection");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3006;

// Cookie settings
const sess = {
  secret: "keyboard cat",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// Activates the cookie
app.use(session(sess));

// Sets express usage
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Loads Stylesheet through express
app.use(express.static(path.join(__dirname, "public")));

//  use handlebars
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// connects to routes
app.use(require("./controllers"));

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening on PORT {{PORT}}"));
});
