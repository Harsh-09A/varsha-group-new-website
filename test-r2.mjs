import { S3Client, PutObjectCommand, ListObjectsV2Command } from "@aws-sdk/client-s3";
import "dotenv/config"; // agar dotenv install nahi hai to niche wala tarika use karo

const r2 = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
});

async function main() {
  try {
    console.log("1. Testing LIST access...");
    const listResult = await r2.send(new ListObjectsV2Command({ Bucket: process.env.R2_BUCKET_NAME, MaxKeys: 5 }));
    console.log("✅ List successful. Objects found:", listResult.KeyCount ?? 0);
  } catch (err) {
    console.error("❌ List failed:", err.name, "-", err.message);
  }

  try {
    console.log("\n2. Testing WRITE access...");
    await r2.send(new PutObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME,
      Key: "test/connection-test.txt",
      Body: "Hello from connection test",
      ContentType: "text/plain",
    }));
    console.log("✅ Write successful!");
  } catch (err) {
    console.error("❌ Write failed:", err.name, "-", err.message);
  }
}

main();