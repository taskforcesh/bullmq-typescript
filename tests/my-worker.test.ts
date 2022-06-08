import { Job } from "bullmq";
import myWorker from "../src/workers/my-worker";
import { describe, it } from "mocha";

describe("My worker", () => {
  it("should do something", async () => {
    const job = {
      data: {
        foo: "bar",
      },
      async log(msg: string) {
        console.log(msg);
        return 0;
      },
    };

    await myWorker(<Job>job);
  });
});
