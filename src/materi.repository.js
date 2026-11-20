import { pool } from './db.js';

export async function semua() {
  const [rows] = await pool.query(
    'SELECT id, judul, mata_kuliah, pertemuan, tautan, dibuat FROM materi ORDER BY id ASC'
  );

  return rows.map((row) => ({
    id: row.id,
    judul: row.judul,
    mataKuliah: row.mata_kuliah,
    pertemuan: row.pertemuan,
    tautan: row.tautan ?? null,
    dibuat: row.dibuat,
  }));
}