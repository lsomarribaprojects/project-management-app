import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// CORS solo para el frontend propio (checklist X2). En produccion definir CLIENT_URL
// (p. ej. https://app.midominio.com); varios origenes separados por coma.
const CLIENT_URL = process.env.CLIENT_URL || (process.env.NODE_ENV === 'production' ? '' : 'http://localhost:5173');
if (!CLIENT_URL) throw new Error('Falta CLIENT_URL');
app.use(cors({ origin: CLIENT_URL.split(',').map((o) => o.trim()) }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('TimeFlow API & Bot is Running!');
});

// TODO: Initialize DB
// TODO: Initialize Telegram Bot

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
