const app = require('../src/app');

// Export the app as a serverless function for Vercel
module.exports = (req, res) => {
  app(req, res);
};
