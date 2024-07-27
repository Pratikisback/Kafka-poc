const { kafka } = require("./client");

async function init() {
  const producer = kafka.producer();
  console.log("connecting producer");
  await producer.connect();
  console.log("producer connected successfully");

  await producer.send({
    topic: "location-update",
    messages: [
      {
        partition: 0,
        key: "location-update",
        value: JSON.stringify({ name: "Pratik Chavan", location: "Mumbai" }),
      },
    ],
  });
  await producer.disconnect();
}

init();
