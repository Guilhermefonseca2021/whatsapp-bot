import qrcode from 'qrcode-terminal';
import { Client, LocalAuth } from 'whatsapp-web.js';


const client = new Client({
    authStrategy: new LocalAuth(), // Configura uma autenticação local para salvar a sessão
    puppeteer: {
        headless: true, // True para não abrir a janela do navegador
        args: [
            '--no-sandbox', // Para melhor compatibilidade em alguns ambientes
            '--disable-setuid-sandbox',
            '--disable-extensions',
            '--disable-dev-shm-usage',
            '--disable-gpu',
            '--disable-gl-drawing-for-tests'
        ]
    }
});

export default client;