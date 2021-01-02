const express = require("express");
const connectDB = require("./config/db");
const app = express();

app.use(express.json({ extended: false }));

//routing
app.use("/api/users", require("../server/routes/api/users"));
app.use("/api/posts", require("../server/routes/api/posts"));
app.use("/api/profile", require("../server/routes/api/profile"));
app.use("/api/auth", require("../server/routes/api/auth"));

connectDB();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`app running on ${PORT}`);
});
