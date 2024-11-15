//const jwt = require("mongodb+srv://jjoshuadaniel1234:jjoshuadaniel1234@cluster0.mx4iz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!verifyToken) {
      return res.status(401).send("Token error");
    }
    req.locals = verifyToken.userId;
    next();
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = auth;
