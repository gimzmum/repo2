
// Import required AWS SDK clients and commands for Node.js.
// Note use of .mjs extensions
import { ListBucketsCommand } from "@aws-sdk/client-s3";
import { s3Client } from "./libs/s3Client.mjs"; // Helper function that creates an Amazon S3 service client module.

export const run = async () => {
  try {
    const data = await s3Client.send(new ListBucketsCommand({}));
    console.log("Success!", data.Buckets);
    return data; // For unit tests.
  } catch (err) {
    console.log("Error", err);
  }
};
run();
