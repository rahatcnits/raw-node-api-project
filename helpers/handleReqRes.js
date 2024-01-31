/*
 * Title: Handle Request Response
 * Description: Handle Request and Response
 * Author: Mohammad Rahat
 * Date: 31/01/2024
 */

// dependencies
const url = require("url");

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

  console.log(queryStringObject);

  // response handle
  res.end("Hello programmers");
};

module.exports = handler;
