const express = require("express");
const app = express();
const apiRoutes = require("./Develop/routes/apiRoutes");
const htmlRoutes = require("./Develop/routes/htmlRoutes");
const PORT = process.env.PORT || 8000;

//set up to receive JSON and string data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//routes as middleware
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

//server listening
app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));
