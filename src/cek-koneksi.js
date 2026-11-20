import pool from './db.js';

try {
  const [rows] = await pool.query('SELECT VERSION() AS versi, DATABASE() AS db');
  console.log('Koneksi berhasil:', {
    versi: rows[0].versi,
    db: rows[0].db,
    pengguna: process.env.DB_USER,
  });
} catch (err) {
  console.error('Koneksi gagal:', err);
  process.exitCode = 1;
} finally {
  await pool.end();
}