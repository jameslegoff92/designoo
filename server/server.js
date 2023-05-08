// Core node modules
const path = require("path");

//Third-party modules
const express = require("express");
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");
const vhost = require("vhost");
const bodyParser = require("body-parser");

// require("./database/dbconnection");

// Open livereload high port and start to watch public directory for changes
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));

// Ping browser on Express boot, once browser has reconnected and handshaken
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

//Monkey patch every served HTML so they know of changes
app.use(connectLivereload());

const port = process.env.PORT || 3000;
const staticFolderPath = path.join(__dirname, "../client/public");
const viewsFolderPath = path.join(__dirname, "/views");

app.use(express.static(staticFolderPath));
app.set("view engine", "ejs");
app.set("views", viewsFolderPath);

//Routes
const homeRoutes = require("./routes/homepage");
const aboutRoutes = require("./routes/about");
const locationRoutes = require("./routes/locations");
const contactRoutes = require("./routes/contact");
const servicesRoutes = require("./routes/services");
const errorRoutes = require("./routes/error");

const admin = express.Router();
app.use(vhost("admin.localhost", admin));
//Admin Interface Routes
admin.get("*", (req, res) => {
  res.render("pages/admin");
});

//Regular Routes
app.use(homeRoutes);
app.use(aboutRoutes);
app.use(locationRoutes);
app.use(contactRoutes);
app.use("/services", servicesRoutes);
app.use(errorRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
