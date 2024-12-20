import app from '../app'; // Adjust path to point to app.ts

export default (req: any, res: any) => {
  app(req, res); // Export Express app as a serverless function
};
