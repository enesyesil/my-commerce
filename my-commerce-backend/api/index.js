const app = require('../dist/app').default; // Import the compiled Express app

// Export a default serverless function
module.exports = (req, res) => {
  app(req, res);
};
