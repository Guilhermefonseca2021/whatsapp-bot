## 📲 WhatsApp Message Sender

Um projeto em TypeScript para enviar mensagens pelo WhatsApp Web usando o whatsapp-web.js! Ideal para automação de mensagens e notificações personalizadas. 🚀

## ⚙️ Funcionalidades

📤 Envio automático de mensagens para contatos do WhatsApp
📋 Facilidade de configuração com o WhatsApp Web
🕹️ Integração com TypeScript para código mais seguro e organizado
🚀 Começando
Siga esses passos para configurar o projeto:

## Pré-requisitos

Node.js instalado (v12 ou superior) 🟢
Conta no WhatsApp 📱

## Instalação

Clone o repositório:

```bash
// clone o repositorio
$   git clone https://github.com/seu-usuario/whatsapp-message-sender.git
// Instale as dependências:
$   npm install
// Inicie o servidor
$   npm run dev
```

Escaneie o QR code com o WhatsApp.
Envie mensagens para contatos especificando o número e a mensagem no código.

## 📜 Exemplo de Código

```js
async function sendMessageToContact(number: string, message: string) {
  const chatId = number.includes("@c.us") ? number : `${number}@c.us`;
  await client.sendMessage(chatId, message);
}
```

## 🚧 Contribuições

Sinta-se à vontade para abrir issues, sugerir melhorias ou enviar pull requests! 🤝
