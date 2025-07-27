const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '../data/drydocks.json')

const readData = () => JSON.parse(fs.readFileSync(filePath))
const writeData = (data) => fs.writeFileSync(filePath, JSON.stringify(data, null, 2))

router.get('/', (req, res) => {
  res.json(readData())
})

router.post('/', (req, res) => {
  const data = readData()
  data.push(req.body)
  writeData(data)
  res.status(201).json({ message: 'Dry Dock created' })
})

router.put('/:dockNo', (req, res) => {
  let data = readData()
  const index = data.findIndex(d => d.dockNo === req.params.dockNo)
  if (index === -1) return res.status(404).json({ message: 'Not found' })

  data[index] = { ...data[index], ...req.body }
  writeData(data)
  res.json({ message: 'Dry Dock updated' })
})

router.delete('/:dockNo', (req, res) => {
  let data = readData()
  data = data.filter(d => d.dockNo !== req.params.dockNo)
  writeData(data)
  res.json({ message: 'Dry Dock deleted' })
})

module.exports = router