const app = require('../dist/app').default; // Import the compiled Express app

module.exports = (req, res) => {
  app(req, res); // Export Express app as a serverless function
};
