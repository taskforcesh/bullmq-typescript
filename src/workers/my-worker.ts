import { Job } from "bullmq";

/**
 * Dummy worker
 *
 * This worker is responsible for doing something useful.
 *
 */
export default async function (job: Job) {
  await job.log("Start processing job");
  console.log("Doing something useful...", job.id, job.data);
}
