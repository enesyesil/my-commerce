import app from '../dist/src/app'; // Correct path to compiled app.js

export default (req, res) => {
  app(req, res); // Export Express app as a serverless function
};
