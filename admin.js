const { kafka } = require("./client");

async function init() {
  const admin = kafka.admin();
  await admin.connect();
  console.log("Admin connected");

  await admin.createTopics({
    topics: [{ topic: "location-update", numPartitions: 2 }],
  });
  console.log("Topics created Success");

  await admin.disconnect();
  console.log("Admin disconnected");
}

init();
