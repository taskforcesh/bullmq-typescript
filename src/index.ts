import { Worker, QueueScheduler } from "bullmq";
import { queueName } from "./types";

const connection = {
  host: "localhost",
  port: 6379,
};

const myQueue = new Worker(queueName, `${__dirname}/workers/my-worker.js`, {
  connection,
});

const myQueueScheduler = new QueueScheduler(queueName, {
  connection,
});

process.on("SIGTERM", async () => {
  console.info("SIGTERM signal received: closing queues");

  await myQueue.close();
  await myQueueScheduler.close();

  console.info("All closed");
});
