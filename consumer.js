const { kafka } = require("./client");

async function init() {
  const consumer = await kafka.consumer({ groupId: "location-group"});
  await consumer.connect();
  consumer.subscribe({ topics: ["location-update"], fromBeginning: true });
  await consumer.run({
    eachMessage: async({ topic, partition, message, heartbeat, pause}) => {
        console.log(`[${topic}]: PART: ${partition}: ${message.toString()} `)
    }

  })
}


init()