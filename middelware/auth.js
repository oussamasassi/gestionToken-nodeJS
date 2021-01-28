const config = require("config");
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("x-auth-token");

  //verify if token is ceated "exists"
  if (!token) {
    res.status(401).json({ msg: "no token authoraziation denied " });
  }
  //verify token
  else
    try {
      const decodedToken = jwt.verify(token, config.get("jwtToken"));
      req.user = decodedToken.user;
      next();
    } catch (error) {
      res.status(401).json({ msg: " Token not valid" });
    }
};
