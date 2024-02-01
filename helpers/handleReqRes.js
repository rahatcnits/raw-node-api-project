/*
 * Title: Handle Request Response
 * Description: Handle Request and Response
 * Author: Mohammad Rahat
 * Date: 31/01/2024
 */

// dependencies
const url = require("url");
const routes = require("../routes");
const {
  notFoundHandler,
} = require("../handlers/routeHandlers/notFoundHandler");

// module scaffolding
const handler = {};

handler.handleReqRes = (req, res) => {
  // request handling
  // get the url and parse it
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, "");
  const method = req.method.toLowerCase();
  const queryStringObject = parsedUrl.query;
  const headersObject = req.headers;

  const requestProperties = {
    parsedUrl,
    path,
    trimmedPath,
    method,
    queryStringObject,
    headersObject,
  };

  const chosenHandler = routes[trimmedPath]
    ? routes[trimmedPath]
    : notFoundHandler;

  chosenHandler(requestProperties, (statusCode, payLoad) => {
    statusCode = typeof statusCode === "number" ? statusCode : 500;
    payLoad = typeof payLoad === "object" ? payLoad : {};

    const payLoadString = JSON.stringify(payLoad);

    // return the final response
    res.writeHead(statusCode);
    res.end(payLoadString);
  });
  // response handle
  // res.end("Hello programmers");
};

module.exports = handler;
