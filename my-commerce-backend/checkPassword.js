const dotenv = require("dotenv");
dotenv.config();


console.log("JWT_SECRET:", process.env.JWT_SECRET);



// Configure dotenv
const result = dotenv.config();
if (result.error) {
  console.error("Error loading .env file:", result.error);
} else {
  console.log("Environment variables loaded:", result.parsed);
}

console.log("JWT_SECRET:", process.env.JWT_SECRET);
