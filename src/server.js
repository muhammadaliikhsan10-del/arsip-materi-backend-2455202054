import express from 'express';
import cors from 'cors';
import materiRoutes from './materi.routes.js';

const app = express();
const PORT = Number(process.env.PORT || 3000);

app.use(cors());
app.use(express.json());

// Rute utama resource materi
app.use('/api/materi', materiRoutes);

// Penangan rute tidak dikenal (404)
app.use((req, res) => {
  res.status(404).json({ error: 'Rute tidak ditemukan' });
});

// Penangan error umum (500) - detail asli hanya dicetak di terminal
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Terjadi kesalahan pada server' });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});