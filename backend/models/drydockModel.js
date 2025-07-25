import db from '../db.js';

export const getAllDryDocks = async () => {
  const res = await db.query('SELECT * FROM dry_docks');
  return res.rows;
};

export const getDryDockById = async (id) => {
  const res = await db.query('SELECT * FROM dry_docks WHERE id = $1', [id]);
  return res.rows[0];
};

export const createDryDock = async (data) => {
  const { dock_no, account_code, description, company, budget } = data;
  const res = await db.query(
    `INSERT INTO dry_docks (dock_no, account_code, description, company, budget)
     VALUES ($1, $2, $3, $4, $5) RETURNING *`,
    [dock_no, account_code, description, company, budget]
  );
  return res.rows[0];
};

export const deleteDryDock = async (id) => {
  await db.query('DELETE FROM dry_docks WHERE id = $1', [id]);
};
