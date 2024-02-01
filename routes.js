/*
 * Title: Routes
 * Description: Application Routes
 * Author: Mohammad Rahat
 * Date: 31/01/2024
 */

// dependencies
const { sampleHandler } = require("./handlers/routeHandlers/sampleHandler");

const routes = {
  sample: sampleHandler,
};

module.exports = routes;
