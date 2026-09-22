import { CronJob } from "cron";
import http from "node:http";
import https from "node:https";

// Run the job every 14 minutes.
// It sends a GET request to the /health endpoint
// to keep the deployed application active.
const job = new CronJob("*/14 * * * *", function () {
  
  // Get the frontend URL from environment variables.
  // Example:
  // FRONTEND_URL=https://your-frontend.onrender.com
  const base = process.env.FRONTEND_URL;

  // If FRONTEND_URL is not configured, stop the job.
  if (!base) return;

  // Create the complete URL by adding /health
  // to the frontend URL.
  const url = new URL("/health", base).href;

  // Use HTTPS for https:// URLs and HTTP for http:// URLs.
  const client = url.startsWith("https:") ? https : http;

  // Send a GET request to the health endpoint.
  client
    .get(url, (res) => {

      // If the server responds with status 200,
      // the health request was successful.
      if (res.statusCode === 200) {
        console.log("GET request sent successfully");
      } else {
        // Log the status code if the request was unsuccessful.
        console.log("GET request failed", res.statusCode);
      }
    })

    // Handle network or connection errors.
    .on("error", (e) => {
      console.error("Error while sending request", e);
    });
});

// Export the cron job so it can be imported and started
// from another file.
export default job;