import colors from "colors";
//middleware
//The middleware function has access to the request and response objects

const logger = function (req, res, next) {
  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`
    [
      'blue'
    ]
  );
  next();
};

export default logger;
