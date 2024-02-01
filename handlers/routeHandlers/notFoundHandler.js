/*
 * Title: Not Found Handler
 * Description: 404 Not Found Handler
 * Author: Mohammad Rahat
 * Date: 31/01/2024
 */

// module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
  console.log(requestProperties);

  callback(404, {
    message: "Your request URL is Not Found",
  });
};

module.exports = handler;
