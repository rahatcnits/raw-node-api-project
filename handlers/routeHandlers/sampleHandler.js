/*
 * Title: Sample Handler
 * Description: Sample Handler
 * Author: Mohammad Rahat
 * Date: 31/01/2024
 */

// module scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
  console.log(requestProperties);

  callback(200, {
    message: "This is simple url",
  });
};

module.exports = handler;
