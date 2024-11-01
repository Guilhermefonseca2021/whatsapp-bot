import Express from "express";
import dotenv from "dotenv";
import client from "./config/whatsapp-bot";
import qrcode from "qrcode-terminal";
import { Message, MessageContent } from "whatsapp-web.js";
dotenv.config();

const app = Express();
const port = process.env.PORT || 3333;

client.on("qr", (qr: string) => {
  qrcode.generate(qr, { small: true });
  console.log("QR code generated, scan it with your WhatsApp app.");
});

const number = "5511999999999"; // Substitua pelo número desejado
const text = "Olá, essa é uma mensagem de teste!";

async function sendMessageToContact(number: string, message: MessageContent) {
  const chatId = number.includes("@c.us") ? number : `${number}@c.us`;
  await client.sendMessage(chatId, message);
}

client.on("ready", async () => {
  try {
    await sendMessageToContact(number, text);
    console.log("Mensagem enviada com sucesso!");
  } catch (error) {
    console.error("Erro ao enviar mensagem:", error);
  }
});

client.on("authenticated", () => {
  console.log("Authenticated");
});

client.on("auth_failure", (msg) => {
  console.error("AUTHENTICATION FAILURE", msg);
});

client.on("message", (message: Message) => {
  // Convert the message to lowercase for case-insensitive matching
  const text = message.body.toLowerCase();

  // Define your commands here
  if (text === "hello") {
    message.reply("Hello! How can I assist you today?");
  } else if (text === "help") {
    message.reply("Available commands:\n1. Hello\n2. Help\n3. Info");
  } else if (text === "info") {
    message.reply("This is a basic WhatsApp bot built with Node.js!");
  } else {
    message.reply(
      "I'm sorry, I didn't understand that command. Type 'help' to see available commands."
    );
  }
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
