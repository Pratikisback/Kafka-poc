const { Kafka } = require("kafkajs");

exports.kafka = new Kafka({
    clientId: "kafka-id",
    brokers: ["192.168.1.7:9092"],
  });