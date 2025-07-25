<template>
  <div class="layout">
    <!-- Sidebar -->
    <aside class="sidebar">
      <h2>Dry Dock</h2>
      <ul>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Specification Groups</a></li>
        <li><a href="#">Work Order Master</a></li>
        <li><a href="#">Checklist</a></li>
        <li class="active"><a href="#">Dry Docks</a></li>
      </ul>
    </aside>

    <!-- Main content -->
    <main class="content">
      <div class="breadcrumb">Dry Docks / <b>SEPT2020/DD1</b></div>

      <div class="tabs">
        <button :class="{ active: activeTab === 'general' }" @click="activeTab = 'general'">General</button>
        <button>Specifications</button>
        <button>Tasks</button>
        <button>Sourcing</button>
        <button>Execution</button>
        <button>Reporting</button>
        <button>Costs</button>
        <button>Purchase Orders</button>
      </div>

      <div v-if="activeTab === 'general'">
        <div class="header-box">
          <div class="info">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Ship_in_dock.jpg/800px-Ship_in_dock.jpg" alt="Ship" />
            <div>
              <h1>{{ dryDock.dockNo }}</h1>
              <p>{{ dryDock.description }}</p>
            </div>
          </div>
          <button class="start-btn">Start Dry Dock</button>
        </div>

        <div class="details">
          <div><strong>Dry Dock No:</strong> {{ dryDock.dockNo }}</div>
          <div><strong>Account Code:</strong> {{ dryDock.accountCode }}</div>
          <div><strong>Currency:</strong> {{ dryDock.currency }}</div>
          <div><strong>Description:</strong> {{ dryDock.description }}</div>
          <div><strong>Company:</strong> {{ dryDock.company }}</div>
          <div><strong>Budget:</strong> {{ dryDock.budget }}</div>
          <div><strong>Planned Start Date:</strong> {{ dryDock.plannedStartDate }}</div>
          <div><strong>Planned End Date:</strong> {{ dryDock.plannedEndDate }}</div>
          <div><strong>Actual Start Date:</strong> {{ dryDock.actualStartDate }}</div>
          <div><strong>Actual End Date:</strong> {{ dryDock.actualEndDate }}</div>
          <div><strong>Responsible Rank:</strong> {{ dryDock.responsibleRank }}</div>
        </div>

        <!-- Form Input CRUD -->
        <h3 style="margin-top: 30px;">Tambah / Edit Data Dry Dock</h3>
        <form @submit.prevent="submitForm" class="form">
          <label>Dry Dock No: <input v-model="form.dockNo" required /></label>
          <label>Description: <input v-model="form.description" required /></label>
          <label>Company: <input v-model="form.company" /></label>
          <label>Budget: <input v-model="form.budget" /></label>
          <label>Planned Start Date: <input type="date" v-model="form.plannedStartDate" /></label>
          <label>Planned End Date: <input type="date" v-model="form.plannedEndDate" /></label>
          <button type="submit">Simpan</button>
        </form>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('general')

const dryDock = ref({
  dockNo: 'SEPT2020/DD1',
  accountCode: 'ABC-123',
  currency: 'USD',
  description: 'DD Required to change BWT',
  company: 'UHC Pvt. Ltd.',
  budget: '200,000$',
  plannedStartDate: '2020-01-01',
  plannedEndDate: '2020-01-01',
  actualStartDate: '2020-01-01',
  actualEndDate: '2020-01-01',
  responsibleRank: 'Roshan Ahluwalia/CE'
})

const form = ref({
  dockNo: '',
  description: '',
  company: '',
  budget: '',
  plannedStartDate: '',
  plannedEndDate: ''
})

const submitForm = () => {
  // Simpan ke JSON atau kirim ke backend (nanti sambungkan ke PostgreSQL)
  dryDock.value = { ...dryDock.value, ...form.value }
  alert('Data berhasil disimpan.')
}
</script>

<style scoped>
.layout {
  display: flex;
  font-family: Arial, sans-serif;
  height: 100vh;
  overflow: hidden;
}

.sidebar {
  width: 230px;
  background: #2196f3;
  color: white;
  padding: 20px;
  box-sizing: border-box;
}

.sidebar h2 {
  font-size: 20px;
  margin-bottom: 20px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  margin-bottom: 12px;
}

.sidebar li.active a {
  font-weight: bold;
}

.sidebar a {
  text-decoration: none;
  color: white;
}

.content {
  flex: 1;
  padding: 30px;
  background: #f6f8fa;
  overflow-y: auto;
}

.breadcrumb {
  font-size: 14px;
  margin-bottom: 15px;
}

.tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 25px;
  flex-wrap: wrap;
}

.tabs button {
  background: #f0f0f0;
  border: none;
  padding: 10px 16px;
  cursor: pointer;
  border-radius: 6px;
}

.tabs button.active {
  background: #2196f3;
  color: white;
}

.header-box {
  display: flex;
  justify-content: space-between;
  background: #2196f3;
  color: white;
  padding: 20px;
  border-radius: 8px;
  align-items: center;
  margin-bottom: 25px;
}

.header-box img {
  width: 80px;
  height: 60px;
  object-fit: cover;
  margin-right: 16px;
  border-radius: 8px;
}

.header-box .info {
  display: flex;
  align-items: center;
}

.start-btn {
  background: white;
  color: #2196f3;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}

.details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  background: white;
  padding: 20px;
  border-radius: 8px;
}

.form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  background: white;
  padding: 20px;
  margin-top: 10px;
  border-radius: 8px;
}

.form label {
  display: flex;
  flex-direction: column;
  font-size: 14px;
}

.form input {
  margin-top: 5px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form button {
  grid-column: span 2;
  padding: 10px;
  background: #2196f3;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
}
</style>
