const express = require('express')
const router = express.Router()
const pool = require('../db') // koneksi PostgreSQL

router.post('/', async (req, res) => {
  const {
    dry_dock_no, account_code, currency, description, company,
    budget, planned_start_date, planned_end_date,
    actual_start_date, actual_end_date, responsible_rank
  } = req.body

  try {
    const result = await pool.query(
      `INSERT INTO drydocks (
        dry_dock_no, account_code, currency, description, company,
        budget, planned_start_date, planned_end_date,
        actual_start_date, actual_end_date, responsible_rank
      ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *`,
      [
        dry_dock_no, account_code, currency, description, company,
        budget, planned_start_date, planned_end_date,
        actual_start_date, actual_end_date, responsible_rank
      ]
    )
    res.json(result.rows[0])
  } catch (err) {
    console.error(err)
    res.status(500).send('Server error')
  }
})

module.exports = router
