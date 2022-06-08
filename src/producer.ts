import { Queue } from "bullmq";
import { queueName } from "./types";

const connection = {
  host: "localhost",
  port: 6379,
};

const myQueue = new Queue(queueName, { connection });

async function addJobs() {
  console.log("Adding jobs...");
  for (let i = 0; i < 10; i++) {
    await myQueue.add("my-job", { foo: "bar" });
  }
  console.log("Done");
  await myQueue.close();
}

addJobs();
