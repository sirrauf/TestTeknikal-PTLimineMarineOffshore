<template>
  <div class="container">
    <!-- Sidebar -->
    <aside class="sidebar">
      <h2>Dry Dock</h2>
      <ul>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Specification Groups</a></li>
        <li><a href="#">Work Order Master</a></li>
        <li><a href="#">Checklist</a></li>
        <li><a class="active" href="#">Dry Docks</a></li>
      </ul>
    </aside>

    <!-- Main Content -->
    <main class="main">
      <div class="breadcrumbs">
        <span>Dry Docks /</span> <strong>{{ formData.dryDockNo }}</strong>
      </div>

      <!-- Tabs -->
      <div class="tabs">
        <button v-for="tab in tabs" :key="tab" :class="{ active: activeTab === tab }" @click="activeTab = tab">
          {{ tab }}
        </button>
      </div>

      <!-- Header Info -->
      <div class="header">
        <img src="https://img.icons8.com/color/96/ship.png" alt="Ship" class="ship-img" />
        <div>
          <h2>{{ formData.dryDockNo }}</h2>
          <p>{{ formData.description }}</p>
        </div>
        <button class="start-btn">Start Dry Dock</button>
      </div>

      <!-- Form Data -->
      <div class="form">
        <div class="column">
          <label>Dry Dock No</label>
          <input v-model="formData.dryDockNo" />
          <label>Account Code</label>
          <input v-model="formData.accountCode" />
          <label>Currency</label>
          <input v-model="formData.currency" />
          <label>Planned Start Date</label>
          <input type="date" v-model="formData.plannedStartDate" />
        </div>
        <div class="column">
          <label>Description</label>
          <input v-model="formData.description" />
          <label>Responsible Rank</label>
          <input v-model="formData.rank" />
          <label>Company</label>
          <input v-model="formData.company" />
          <label>Planned End Date</label>
          <input type="date" v-model="formData.plannedEndDate" />
        </div>
        <div class="column">
          <label>Budget</label>
          <input v-model="formData.budget" />
          <label>Actual Start Date</label>
          <input type="date" v-model="formData.actualStartDate" />
          <label>Actual End Date</label>
          <input type="date" v-model="formData.actualEndDate" />
        </div>
      </div>

      <!-- Buttons -->
      <div class="actions">
        <button @click="saveData">💾 Simpan JSON</button>
        <button @click="editData">✏️ Edit JSON</button>
        <button @click="deleteData">🗑️ Hapus JSON</button>
      </div>

      <!-- Output -->
      <div class="json-preview">
        <h3>Data JSON</h3>
        <pre>{{ jsonData }}</pre>
      </div>
    </main>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const tabs = ['General', 'Specifications', 'Tasks', 'Sourcing', 'Execution', 'Reporting', 'Costs', 'Purchase Orders']
const activeTab = ref('General')

const formData = reactive({
  dryDockNo: 'SEPT2020/DD1',
  description: 'DD Required to change BWT',
  rank: 'Roshan Ahluwalia/CE',
  company: 'UHC Pvt. Ltd.',
  budget: '200,000$',
  accountCode: 'ABC-123',
  currency: 'USD',
  plannedStartDate: '2020-01-01',
  plannedEndDate: '2020-01-01',
  actualStartDate: '2020-01-01',
  actualEndDate: '2020-01-01'
})

const jsonData = ref('')

function saveData() {
  jsonData.value = JSON.stringify(formData, null, 2)
}

function editData() {
  const parsed = JSON.parse(jsonData.value || '{}')
  Object.assign(formData, parsed)
}

function deleteData() {
  Object.keys(formData).forEach(key => formData[key] = '')
  jsonData.value = ''
}
</script>

<style scoped>
.container {
  display: flex;
  font-family: sans-serif;
}

.sidebar {
  background: #007bff;
  color: white;
  width: 250px;
  padding: 20px;
  height: 100vh;
}

.sidebar h2 {
  margin-top: 0;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li a {
  display: block;
  color: white;
  padding: 10px 0;
  text-decoration: none;
}

.sidebar li a.active {
  background: #005bb5;
  font-weight: bold;
}

.main {
  flex: 1;
  padding: 20px;
}

.breadcrumbs {
  margin-bottom: 10px;
}

.tabs button {
  margin-right: 8px;
  padding: 10px 15px;
  border: 1px solid #ccc;
  background: white;
  cursor: pointer;
}

.tabs button.active {
  background: #007bff;
  color: white;
}

.header {
  display: flex;
  align-items: center;
  background: #2196f3;
  color: white;
  padding: 20px;
  border-radius: 8px;
}

.ship-img {
  width: 80px;
  height: auto;
  margin-right: 20px;
}

.start-btn {
  margin-left: auto;
  background: white;
  color: #007bff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.form {
  display: flex;
  margin-top: 20px;
  gap: 40px;
}

.column {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.column label {
  margin-top: 10px;
  font-weight: bold;
}

.column input {
  padding: 6px;
  margin-top: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.actions {
  margin-top: 20px;
}

.actions button {
  margin-right: 10px;
  padding: 10px 15px;
  cursor: pointer;
}

.json-preview {
  margin-top: 20px;
  background: #f9f9f9;
  padding: 10px;
  border-radius: 6px;
}
</style>
