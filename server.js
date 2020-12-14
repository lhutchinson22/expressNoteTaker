const express = require("express");
const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER
require("./Develop/routes/apiRoutes")(app);
require("./Develop/routes/htmlRoutes")(app);

// LISTENER
// "starts" our server
app.listen(PORT, () => {
  console.log(`App listening http://localhost:${PORT}`);
});
